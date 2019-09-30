const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const MessageSchema = new mongoose.Schema({
    topic: {
        type: String,
        require: false
    },
    message: {
        type: String,
        require: false
    }
});

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
