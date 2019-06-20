const express = require('express');
const helmet = require('helmet');

const routes = require('../resources/routes');

const server = express();

server.use(helmet(), express.json())
server.use('/api/dbcontent', routes);

server.get('/', logger, (req, res) => {
    res.status(200).json({ api: 'up' })
})

// logger middleware
function logger(req, res, next) {
    console.log(`${req.method} request on route ${req.originalUrl} at [${Date.now()}]`);
    next();
}

module.exports = server;