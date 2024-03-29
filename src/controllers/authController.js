const express = require('express')
const User = require('../model/users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../credentials/auth.json')
const router = express.Router()


function generateToken(params = {} ) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

router.post('/register', async(req, res) => {
    try {
        console.log(req.body)
        const { email } = req.body

        
        
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists'});
        }

        const user = await  User.create(req.body)
        
        user.password = undefined;

        return res.send({user,
                         token: generateToken({id: user.id})
            });
    } catch(err) {
        console.log(err)
        process.exit(1)
        return res.status(400).send({ error: 'Registration failed'})
    }
})

router.post('/authenticate', async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
        return res.status(400).send({ error: 'user not found'})
    }

    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'invalid password'})
    }

    user.password = undefined;

    res.send({ user, 
               token: generateToken({ id: user.id }) });
});

router.get('/teste', (req, res) => {
    console.log('motorama');
    
     User.find().limit(10)
    .then(result => {
       console.log(result);
      return  res.send({teste: result})
     })

     //res.send({ssta: s})

     // res.send({status: 'pk'})
})

module.exports = app => app.use('/auth', router);