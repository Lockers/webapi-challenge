const express = require('express');
const cors = require('cors');
const projectRouter = require('./data/routers/projectRouter.js')
const actionRouter = require('./data/routers/actionRouter')
const helmet = require('helmet')

const server = express();
server.use(logger)
server.use(helmet())
server.use(cors());
server.use('/', projectRouter, actionRouter);
server.use(express.json())


server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge HomePage</h2>`)
});

function logger(req, res, next) {
    console.log(`Request Method: ${req.method} Request URL: ${req.url} ${Date()}`)
    next()
};

module.exports = server;