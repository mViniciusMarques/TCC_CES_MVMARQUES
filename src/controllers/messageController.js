const express = require('express')
const Message = require('../model/message')

const router = express.Router();

router.get('/teste', (req, res) => {
    console.log('motorama');
    
       Message.find().limit(10).then( (result) =>{
       console.log('result');    
       console.log(result)
       })
     res.send({status: 'pk'})
})

module.exports = app => app.use('/messages', router);