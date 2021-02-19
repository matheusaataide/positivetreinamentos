const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = Express();

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

server.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }));
server.get('*', (req, res) => {
    res.sendFile('index.html', { root: baseDir });
});

module.exports = server;