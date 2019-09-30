const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const MqttSchema = new mongoose.Schema({
    topic: {
        type: String,
        require: false
    },
    data: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const MqttDatamodel = mongoose.model('Mqttdatamodel', MqttSchema);

module.exports = MqttDatamodel;