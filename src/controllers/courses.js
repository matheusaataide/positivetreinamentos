import httpStatus from 'http-status';
import path from 'path';
import fs from 'fs';

const CourseController = database => ({
    list: async (req, res) => {
        try {
            const { courses } = database;

            const list = await courses.findAll();

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
            const { courses } = database;

            const { id } = req.params;

            const course = await courses.findByPk(id);

            return res
                .status(httpStatus.OK)
                .json({
                    status: course !== null,
                    content: course 
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
            const { courses } = database;

            const { id } = req.params;

            const course = await courses.findByPk(id);

            if (course === null) 
                return res
                        .status(httpStatus.BAD_REQUEST)
                        .json({
                            status: false,
                            content: {}
                        });

            const flag = await courses.destroy({ where: { id }});
            if (course.photo !== null && course.photo !== "") {
                fs.unlink(
                    path.join(__dirname, '..', 'uploads', course.photo),
                    err => {
                        if (err) console.error(err.stack);
                    }
                );
            }

            return res
                .status(httpStatus.OK)
                .json({
                    status: flag === 1,
                    content: course 
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
            const { courses } = database;

            let newCourse = { 
                ...req.body,
                profile_pic: req.file ? req.file.filename : ''
             }

            const course = await courses.create(newCourse);

            return res
                .status(httpStatus.OK)
                .json({
                    status: true,
                    content: course 
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
            const { courses } = database;

            const { id } = req.params;

            const oldData = await courses.findByPk(id);
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

            const [ flag ] = await courses.update({
                ...oldData,
                ...req.body,
                photo: req.file ? req.file.filename : oldData.photo
            }, { where: req.params });

            const newData = await courses.findByPk(id);
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

export default CourseController;
