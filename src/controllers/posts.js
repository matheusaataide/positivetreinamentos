import httpStatus from 'http-status';
import path from 'path';
import fs from 'fs';

const PostController = database => ({
    list: async (req, res) => {
        try {
            const { posts } = database;

            const list = await posts.findAll();

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
            const { posts } = database;

            const { id } = req.params;

            const post = await posts.findByPk(id);

            return res
                .status(httpStatus.OK)
                .json({
                    status: post !== null,
                    content: post 
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
            const { posts } = database;

            const { id } = req.params;

            const post = await posts.findByPk(id);

            if (post === null) 
                return res
                        .status(httpStatus.BAD_REQUEST)
                        .json({
                            status: false,
                            content: {}
                        });

            const flag = await posts.destroy({ where: { id }});
            if (post.photo !== null && post.photo !== "") {
                fs.unlink(
                    path.join(__dirname, '..', 'uploads', post.photo),
                    err => {
                        if (err) console.error(err.stack);
                    }
                );
            }

            return res
                .status(httpStatus.OK)
                .json({
                    status: flag === 1,
                    content: post 
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
            const { posts } = database;

            let newPost = { 
                ...req.body,
                profile_pic: req.file ? req.file.filename : ''
             }

            const post = await posts.create(newPost);

            return res
                .status(httpStatus.OK)
                .json({
                    status: true,
                    content: post 
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
            const { posts } = database;

            const { id } = req.params;

            const oldData = await posts.findByPk(id);
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

            const [ flag ] = await posts.update({
                ...oldData,
                ...req.body,
                photo: req.file ? req.file.filename : oldData.photo
            }, { where: req.params });

            const newData = await posts.findByPk(id);
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

export default PostController;
