const mqtt    = require('mqtt');
const mqttConfig = require('../credentials/mqtt-config.json');
const MqttDataModel = require('../model/mqtt-model')
const options = { retain:true, qos:0};
const topic_list=["cain","abel","romulo","remo"];
const enc = new TextDecoder("utf-8");

const con = mqtt.connect("mqtt://soldier.cloudmqtt.com",
                {clientId:"CASA099",
                    username: 'bvqnjxaz', 
                    password: 'mRCgh4BPQqGw', 
                    port: 16418});

        con.on("connect",  function() {
                //console.log("connected  "+ con.connected); 
            });

        con.on("error",    function(error) { console.log("Can't connect" + error); });
      
        
    //console.log(con.connected)   
    if(!con.connected) {
        con.reconnect();
    }    
    
    con.subscribe(topic_list,options)
   
    con.subscribe('Remo')
    con.on('message', function (topic, message) {
        console.log(topic)
        console.log(enc.decode(message))

       MqttDataModel.create({
        "topic" : topic,
        "data" :  enc.decode(message)
        })
    })

    con.subscribe('Remo/Temperature')
    con.on('message', function (topic, message) {
        console.log(topic)
        console.log(enc.decode(message))

       MqttDataModel.create({
        "topic" : topic,
        "data" :  enc.decode(message)
        })
    })

    con.subscribe('Remo/Humity')
    con.on('message', function (topic, message) {
        console.log(topic)
        console.log(enc.decode(message))

       MqttDataModel.create({
        "topic" : topic,
        "data" :  enc.decode(message)
        })
    })

    con.subscribe('Romulo')
    con.on('message', function (topic, message) {
       console.log(topic)
       console.log(enc.decode(message))

       MqttDataModel.create({
           "topic" : topic,
           "data" :  enc.decode(message)
       })
    })