const server = require('./server.js');

const host = process.env.HOST || 'positivetreinamentos.com.br';
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`[${ process.env.NODE_ENV.toUpperCase() }] Server is running on http://${host}:${port}/api`);
});