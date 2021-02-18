const httpStatus = require('http-status');

const email = require('../util/emailSender');
const newMsgTemplate = require('../util/emailTemplates/newMessageTemplate');

const MessageController = database => ({
    delete: async (req, res) => {
        const { messages } = database;
        const flag = await messages.destroy({ where: req.params });
        return res.status(httpStatus.OK).json({ success: flag });
    },
    get: async (req, res) => {
        const { messages } = database;
        const message = await messages.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(message);
    },
    getAll: async (req, res) => {
            const { messages } = database;
            return res.status(httpStatus.OK).json(await messages.findAll());
        },
    save: async (req, res) => {
        const { messages } = database;

        const msg = await messages.create(req.body); 

        const to = { 
            "name": "Positive Treinamentos",
            "email": process.env.TO_EMAIL || 'contato@matheusataide.com.br'
        }
        try {
            email.send(
                    [to],
                    "Recebemos uma nova mensagem no site",
                    newMsgTemplate(msg.content)
                );
        } catch (err) {
            console.table(err);    
        }

        return res.status(httpStatus.CREATED).json(msg);
    },
    edit: async (req, res) => {
        const { messages } = database;
        const post = await messages.update(req.body, { where: req.params });
        return res.status(httpStatus.CREATED).json(post);
    }
});


module.exports = MessageController;