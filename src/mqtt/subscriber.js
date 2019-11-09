const mqtt    = require('mqtt');
const MqttDataModel = require('../model/mqtt-model')
const enc = new TextDecoder("utf-8");
const UM_MINUTO = 60;
const CINCO_MINUTOS = 300;
const DEZ_MINUTOS = 600;
const QUINZE_MINUTOS = 900;
const TRINTA_MINUTOS = 1800;
const UMA_HORA = 3600;
const UM_DIA = 86400;
const topic_list=["Remo/Gas'",
                  "Remo/Temperature",
                  "Remo/Humity",
                  "Remo/SoilHumity",
                  'Remo/Check',
                  'FRemo/Temperature',
                  'FRemo/Vibration',
                  'FRemo/SoilHumity',
                  'FRemo/WaterDetector',
                  'FRemo/AirPresure',
                  'FRemo/GasConcentration',
                  'Cain/FHumity',
                  'Cain/FTemperature',
                  'Cain/FAirPressure',
                  'Cain/FGasConcetration',
                  'Cain/FSoilHumity',
                  'Cain/FWater',
                ];
console.log('======= up por node cam')

const con = mqtt.connect("mqtt://soldier.cloudmqtt.com",
                {clientId:"========= HEROKU _ NODE ============",
                    username: 'bvqnjxaz', 
                    password: 'mRCgh4BPQqGw', 
                    port: 16418});

            con.on("error",    function(error) { console.log("Can't connect" + error); });
      
        
            if(!con.connected) {
                con.reconnect();
            }    
            
                con.subscribe(topic_list)
                //.setMaxListeners(1)
                con.on('message', function (topic, message) {
                    console.log(topic)
                    console.log(enc.decode(message))
    
                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
            

module.exports = con; 
    