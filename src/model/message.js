const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const MessageSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: false,
        auto: true
    },
    topic: {
        type: String,
        require: false
    },
    message: {
        type: String,
        require: false
    }
});


console.log(mongoose.ConnectionStates)

const Message = mongoose.model('message ', MessageSchema);

module.exports = Message;
