const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = Express();

const email = require('./email/emailSender');
const newMsgTemplate = require('./email/newMessageTemplate');

// middlewares
server.use(
    helmet({ contentSecurityPolicy:  undefined }),
    bodyParser.urlencoded({ limit: '25mb', extended: true }),
    bodyParser.json({ limit: '25mb' }),
    cors(),
    morgan('combined'),
    (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
);

// Front end
const baseDir = `${__dirname}/build/`
server.use(Express.static(`${baseDir}`));

server.post('/api/messages', (req, res) => {
    const msg = req.body; 

    console.table(msg);

    const to = { 
        "name": "Positive Treinamentos",
        "email": 'matheusantonio96@gmail.com'
    };

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
});

server.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }));
server.get('*', (req, res) => {
    res.sendFile('index.html', { root: baseDir });
});

module.exports = server;