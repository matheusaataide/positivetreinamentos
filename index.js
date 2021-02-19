const server = require('./server.js');

const host = 'positivetreinamentos.com.br';
const port = 3000;

server.listen(port, () => {
    console.log(`[${ process.env.NODE_ENV.toUpperCase() }] Server is running on http://${host}:${port}/api`);
});