const express = require('express');
const router = express.Router();
const messages=require("./messages-model");


router.get('/', (req, res) => {
    messages.find().then(message=>{
        res.status(200).json(message);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Can\'t get messages'})
    })
});


router.post('/send-message', (req, res) => {
    const body = req.body;
    messages.createMessage(body).then(message=>{
        console.log("success")
        res.status(201).json({
            confirmed:"Thank You!"
        });
    }).catch(err=>{
        console.log(body)
        console.log(err);
        res.status(500).json({errorMessage:'Post Failed'})
    })
});


module.exports = router