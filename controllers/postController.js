const httpStatus = require('http-status');

const PostController = database => ({
    delete: async (req, res) => {
        const { posts } = database;
        const flag = await posts.destroy({ where: req.params });
        return res.status(httpStatus.OK).json({ success: flag });
    },
    get: async (req, res) => {
        const { posts } = database;
        const post = await posts.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(post);
    },
    getAll: async (req, res) => {
            const { posts } = database;
            return res.status(httpStatus.OK).json(await posts.findAll());
        },
    save: async (req, res) => {
        const { posts } = database;

        const newInstance = await posts.create(req.body); 

        return res.status(httpStatus.CREATED).json(newInstance);
    },
    edit: async (req, res) => {
        const { posts } = database;
        const post = await posts.update(req.body, { where: req.params });
        return res.status(httpStatus.CREATED).json(post);
    }
});


module.exports = PostController;