const express = require('express');

const server = express();

const helmet = require('helmet');

server.use(helmet());


const messages = require('./messages/messages-router')


server.use(express.json());


server.use('/messages', messages);



server.get('/', (req,res)=>{

    const test=[{Message:`*** Server is up and running ***`}]
    res.status(200).json(test);

})

module.exports = server;

