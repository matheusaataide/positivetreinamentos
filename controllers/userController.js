const httpStatus = require('http-status');
const path = require('path');
const fs = require('fs');
const security = require('../util/security');


const UserController = database => ({
    delete: async (req, res) => {
        try {
            const { users } = database;
        
            const user = await users.findByPk(req.params.id);
            if (user === null)
                return res.status(httpStatus.BAD_REQUEST).json({
                    success: false,
                    msg: 'Instance not found.'
                });

            if (user.profilePic !== null && user.profilePic !== "") {
                fs.unlink(path.join(__dirname, '..', 'uploads', user.profilePic),
                            err => {
                                if (err) console.error(err.stack);
                            });
            }

            const flag = await users.destroy({ where: req.params });
            return res.status(httpStatus.OK).json({ 
                success: true,
                data: user
             });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                msg: 'Internal server error.'
            });
        }
    },
    get: async (req, res) => {
        const { users } = database;
        const user = await users.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(user);
    },
    getAll: async (req, res) => {
            const { users, graduations } = database;

            const list = await users.findAll({
                include: [{ 
                    model: graduations,
                    order: [['createdAt','ASC']]
                }]
            });

            return res.status(httpStatus.OK).json(list);
        },
    save: async (req, res) => {
        const { users } = database;

        let newUser = { 
            ...req.body,
            profilePic: req.file ? req.file.filename : ''
         }

        newUser = await users.create(newUser); 

        return res.status(httpStatus.CREATED).json(newUser);
    },
    edit: async (req, res) => {
        try {
            const { users } = database;
            
            const oldData = await users.findByPk(req.params.id);
            if (oldData === null)
                return res.status(httpStatus.BAD_REQUEST).json({
                    success: false,
                    msg: 'Instance not found.'
                });
            
            if (req.file){
                if (oldData.profilePic !== null && oldData.profilePic !== "") {
                    fs.unlink(path.join(__dirname, '..', 'uploads', oldData.profilePic),
                                err => {
                                    if (err) console.error(err.stack);
                                });
                }
            }

            const result = await users.update({
                ...oldData,
                ...req.body,
                profilePic: req.file ? req.file.filename : oldData.profilePic
            }, { where: req.params });

            const newData = await users.findByPk(req.params.id);
            return res.status(httpStatus.CREATED).json({
                success: result[0] === 1,
                data: newData
            });
        } catch (err) {
            console.log(err);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                msg: 'Internal server error'
            });
        }
    },

    // Funcão responsável pela autenticação
    login: async (req, res) => {
        const { users } = database;

        const { username, password } = req.body;

        const user = await users.findOne({ where: { username: username }});
        if (user === null) 
            return res.status(httpStatus.BAD_REQUEST).json({ auth: false });

        return res.status(httpStatus.OK).json(security.login(user, password));   
    }
});


module.exports = UserController;