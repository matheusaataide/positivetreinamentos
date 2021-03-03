const httpStatus = require('http-status');

const TestemonialController = database => ({
    delete: async (req, res) => {
        const { testemonials } = database;
        const flag = await testemonials.destroy({ where: req.params });
        return res.status(httpStatus.OK).json({ success: flag });
    },
    get: async (req, res) => {
        const { testemonials } = database;
        const testemonial = await testemonials.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(testemonial);
    },
    getAll: async (req, res) => {
            const { testemonials } = database;
            return res.status(httpStatus.OK).json(await testemonials.findAll());
        },
    save: async (req, res) => {
        const { testemonials } = database;

        const newInstance = await testemonials.create(req.body); 

        return res.status(httpStatus.CREATED).json(newInstance);
    },
    edit: async (req, res) => {
        const { testemonials } = database;
        const post = await testemonials.update(req.body, { where: req.params });
        return res.status(httpStatus.CREATED).json(post);
    }
});


module.exports = TestemonialController;