const express = require('express')
const Message = require('../model/message')

const router = express.Router();



router.get('/teste', (req, res) => {
    console.log('motorama');
    
     Message.collection().find().limit(10).then(result => {
       console.log(result)
     })

     Message.count().then((x) => {
         console.log(x)
     })

     res.send({status: 'pk'})
})

module.exports = app => app.use('/messages', router);