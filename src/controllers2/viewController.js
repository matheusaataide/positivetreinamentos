const httpStatus = require('http-status');

const ViewController = database => ({
    getByPage: async (req, res) => {
        const { views } = database;

        const total = await views.count(req.params);
        
        return res.status(200).json({ total });
    },
    getAll: async (req, res) => {
            const { views } = database;
            return res.status(httpStatus.OK).json(await views.count());
        },
    save: async (req, res) => {
        const { views } = database;

        const newView = await views.create(req.body);
        const total = await views.count({ where: req.params });
        return res.status(httpStatus.OK).json({ total });
    }
});


module.exports = ViewController;