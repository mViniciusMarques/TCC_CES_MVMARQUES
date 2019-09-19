const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const MessageSchema = new mongoose.Schema({
    topic: {
        type: String,
        require: false
    },
    message: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


console.log(mongoose.ConnectionStates)

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
