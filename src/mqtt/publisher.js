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
        
        con.publish(`FRemo/Gas`, sensor_data, function() {
            MqttDataModel.create({
                "topic": `FRemo/${location}/Gas`,
                "data": sensor_data
            })

        });
        
    },

    async publishHumitySensor(req, red) {
        const { location, sensor_data } = req.body;

        con.publish(`FRemo/Humity`, sensor_data, function() {
            MqttDataModel.create({
                "topic": `FRemo/Humity`,
                "data": sensor_data
            })

        });

    }, 

    async publishRemoHealthCheck(req, res) {
        const { sensor_data } = req.body;
        console.log(sensor_data)
        con.publish(`FRemo/Check`, sensor_data);
    },

    async publishTemperatureSensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/Temperature`, sensor_data)
    },

    async publishVibrationSensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/Vibration`, sensor_data)
    },

    async publishSoilHumitySensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/SoilHumity`, sensor_data);

    }, 

    async publishWaterDetectorSensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/WaterDetector`, sensor_data);
    },

    async publishAirPressureSensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/AirPresure`, sensor_data);
    },

    async publishGasConcentrationSensor(req, res) {
        const { sensor_data } = req.body;
        con.publish(`FRemo/GasConcentration`, sensor_data);
    }
}