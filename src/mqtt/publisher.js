const mqttController = require('./mqtt-controller');
const MqttDataModel = require('./../model/mqtt-model');
const enc = new TextDecoder("utf-8");

const mqtt = require('mqtt');

const con = mqtt.connect("mqtt://soldier.cloudmqtt.com",
{
    clientId: "========== NODE SERVER =========",
    username: 'bvqnjxaz',
    password: 'mRCgh4BPQqGw',
    port: 16418
});
      
module.exports = {

    async publishGasData(req, res) {
        const { location, sensor_data } = req.body;
        console.log(req)
        
        con.publish(`FRemo/${location}/Gas`, sensor_data, function() {
            MqttDataModel.create({
                "topic": `Remo/${location}/Gas`,
                "data": sensor_data
            })

        });
        
    },

    async publishHumitySensor(req, red) {
        const { location, sensor_data } = req.body;

        con.publish(`FRemo/${location}/Humity`, sensor_data, function() {
            MqttDataModel.create({
                "topic": `Remo/${location}/Humity`,
                "data": sensor_data
            })

        });

    }, 

    async publishSoilHumitySensor(req, red) {
        const { location, sensor_data } = req.body;

        con.publish(`FRemo/${location}/Humity`, sensor_data, function() {
            MqttDataModel.create({
                "topic": `Remo/${location}/Humity`,
                "data": sensor_data
            })

        });

    }, 

    async publishRemoHealthCheck(req, res) {
        const { sensor_data } = req.body;
        console.log(sensor_data)
        con.publish(`Remo/Check`, sensor_data)
    }
}