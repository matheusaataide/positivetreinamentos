const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');
const { default: axios } = require('axios');

const server = Express();

require('dotenv').config({
    path: __dirname + `${process.env.NODE_ENV === "development" ? "/.env.dev" : "/.env"}`
});

// middlewares
server.use(
    helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }),
    bodyParser.urlencoded({ limit: '25mb', extended: true }),
    bodyParser.json({ limit: '25mb' }),
    cors(),
    morgan(process.env.NODE_ENV === "development" ? 'dev' : 'combined'),
    (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
);

// Fazendo roteamento de rotas da API
server.use('/api', routes);

// Disponibilizando uploads 
server.use('/uploads', Express.static('./uploads'));

// Front end
const baseDir = `${__dirname}/client/build/`
server.use(Express.static(`${baseDir}`));

server.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }));
server.get('*', (req, res) => {
    res.sendFile('index.html', { root: baseDir });
});



module.exports = server;