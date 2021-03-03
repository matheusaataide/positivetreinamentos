import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import 'regenerator-runtime';

import routes from './routes';

const server = express();

const pathEnv = process.env.NODE_ENV === "development" ?
                ".env.dev" :
                ".env";
dotenv.config({
    path: path.resolve(__dirname, '..', pathEnv)
});

// middlewares
server.use(
    bodyParser.urlencoded({
        limit: '25mb',
        extended: true
    }),
    bodyParser.json(),
    cors(),
    morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"),
    (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
);

// Disponibilizando API
server.use('/api', routes);

// Front end
const baseDir = `${__dirname}/../client/build/`
server.use(express.static(`${baseDir}`));

server.use('/uploads', express.static('./uploads'));
server.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }));
server.get('*', (req, res) => {
    res.sendFile('index.html', { root: baseDir });
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`[${ process.env.NODE_ENV.toUpperCase() }] Server is running on ${process.env.HOST}:${port}`);
});

export default server;