const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet(), express.json())

server.get('/', logger, (req, res) => {
    res.status(200).json({ api: 'up' })
})

// logger middleware
function logger(req, res, next) {
    console.log(`${req.method} request on route ${req.originalURL} at [${Date.now()}]`);
    next();
}

module.exports = server;