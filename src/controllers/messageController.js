const express = require('express')
const Message = require('../model/message')

const router = express.Router();



router.get('/teste', (req, res) => {
    console.log('motorama');
    
     Message.find().limit(10).then(result => {
       return res.send({status: result})
     })
   //  res.send({status: 'pk'})
})

router.post('/salvar', (req, res) => {
  console.log('salvar message');
  
  // res.send({ 
  //   topic: 'cain',
  //   message: 'romulo'
  // });

  Message.create(req.body).then( () => {
    res.send('sucesso')
  }).catch( err => res.send(err))
})

module.exports = app => app.use('/messages', router);