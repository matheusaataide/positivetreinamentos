const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const app = Express();

app.use(
    helmet(),
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    cors()
);

app.use(Express.static('public2'));
app.get('/', (req, res) => {
    res.sendFile('/public2/index.html');
});

module.exports = app;
