import httpStatus from 'http-status';
import path from 'path';
import fs from 'fs';

const SectionController = database => ({
    getByName: async (req, res) => {
        try {
            const { sections } = database;

            const list = await sections.findAll({
                where: {
                    ...req.params,
                    status: true
                },
                attributes: ['key', 'value']
            });

            let section = {};
            list.forEach(item => {
                section[item.key] = item.value;
            });

            return res
                .status(httpStatus.OK)
                .json({
                    status: list !== [],
                    content: section
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
            const { sections } = database;

            const { name, key } = req.params;

            const section = await sections.findOne({
                where: { name, key }
            });

            return res
                .status(httpStatus.OK)
                .json({
                    status: section !== null,
                    content: section !== null ? section.value : ''
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
            const { sections } = database;

            const { name, key } = req.params;

            const oldData = await sections.findOne({
                where: { name, key }
            });
            
            if (oldData === null)
                return res
                    .status(httpStatus.BAD_REQUEST)
                    .json({
                        status: false,
                        msg: 'Instance not found.'
                    });
            
            if (key === "img" && req.file) {
                if (oldData.value !== null && 
                    oldData.value !== "") {
                    fs.unlink(  
                        path.join(__dirname, '..', 'uploads', oldData.value),
                        err => {
                            if (err) console.error(err.stack);
                        }
                    );
                }
            }

            const [ flag ] = await sections.update({
                ...oldData,
                ...req.body,
                value: req.file ? req.file.filename : oldData.value
            }, { where: req.params });

            const newData = await sections.findByPk(id);
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

export default SectionController;
