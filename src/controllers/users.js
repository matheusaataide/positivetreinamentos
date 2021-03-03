import httpStatus from 'http-status';
import path from 'path';
import fs from 'fs';

const UserController = database => ({
    list: async (req, res) => {
        try {
            const { users, graduations } = database;

            const list = await users.findAll({
                include: [{
                        model: graduations
                    }]
            });

            return res
                .status(httpStatus.OK)
                .json({
                    status: true,
                    content: list 
                });
        } catch (err) {
            console.log(err);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: false,
                    error: err.stack
                });
        }
    },
    index: async (req, res) => {
        try {
            const { users, graduations } = database;

            const { id } = req.params;

            const user = await users.findByPk(id, {
                include: [{
                        model: graduations
                    }]
            });

            return res
                .status(httpStatus.OK)
                .json({
                    status: user !== null,
                    content: user 
                });
        } catch (err) {
            console.log(err);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: false,
                    error: err.stack
                });
        }
    },
    remove: async (req, res) => {
        try {
            const { users } = database;

            const { id } = req.params;

            const user = await users.findByPk(id);

            if (user === null) 
                return res
                        .status(httpStatus.BAD_REQUEST)
                        .json({
                            status: false,
                            content: {}
                        });

            const flag = await users.destroy({ where: { id }});
            if (user.photo !== null && user.photo !== "") {
                fs.unlink(
                    path.join(__dirname, '..', 'uploads', user.photo),
                    err => {
                        if (err) console.error(err.stack);
                    }
                );
            }

            return res
                .status(httpStatus.OK)
                .json({
                    status: flag === 1,
                    content: user 
                });
        } catch (err) {
            console.log(err);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: false,
                    error: err.stack
                });
        }
    },
    insert: async (req, res) => {
        try {
            const { users } = database;

            let newUser = { 
                ...req.body,
                profile_pic: req.file ? req.file.filename : ''
             }

            const user = await users.create(newUser);

            return res
                .status(httpStatus.OK)
                .json({
                    status: true,
                    content: user 
                });
        } catch (err) {
            console.log(err);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: false,
                    error: err.stack
                });
        }
    },
    edit: async (req, res) => {
        try {
            const { users } = database;

            const { id } = req.params;

            const oldData = await users.findByPk(id);
            if (oldData === null)
                return res
                    .status(httpStatus.BAD_REQUEST)
                    .json({
                        status: false,
                        msg: 'Instance not found.'
                    });
            
            if (req.file) {
                if (oldData.photo !== null && 
                    oldData.photo !== "") {
                    fs.unlink(  
                        path.join(__dirname, '..', 'uploads',
                        oldData.photo),
                        err => {
                            if (err) console.error(err.stack);
                        }
                    );
                }
            }

            const [ flag ] = await users.update({
                ...oldData,
                ...req.body,
                photo: req.file ? req.file.filename : oldData.photo
            }, { where: req.params });

            const newData = await users.findByPk(id);
            return res
                    .status(httpStatus.CREATED)
                    .json({
                        status: flag === 1,
                        content: newData
                    });
        } catch (err) {
            console.log(err);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: false,
                    error: err.stack
                });
        }
    },
});

export default UserController;
