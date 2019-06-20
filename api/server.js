const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet(), express.json())

server.get('/', (res, req) => {
    res.send(`I am here!`)
})

// logger middleware
function logger(req, res, next) {
    console.log(`${req.method} request on route ${req.originalURL} at [${Date.now()}]`)
}

module.exports = server;