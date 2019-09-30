const mqtt    = require('mqtt');
const mqttConfig = require('../credentials/mqtt-config.json')
var count = 0;

const q = mqttConnect()
console.log(q.connected)



function mqttClient() {
    const client  = this.mqttConnection
    client.reconnect()

//handle incoming messages

    client.on('message',function(topic, message, packet){
        console.log("mensagem capitada "+ message.toString());
        console.log("topic is "+ topic);
    });


    client.on("connect",function(){	
    console.log("connected  "+ client.connected);

    })

    if(client.connected){
        this.publish('Remo','ATIVO')
    }
    //handle errors
    client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});
    //publish

    function publish(topic,msg){
    console.log("publishing",msg);
    if (client.connected == true){
        console.log('attack em mothafucker')
        client.publish(topic,msg,options);

    } else {
        console.log('tei')
                    client.reconnect({clientId:"mqttjs01",
                    username: 'bvqnjxaz', 
                    password: 'mRCgh4BPQqGw', 
                    port: 16418});
        client.publish("nodeB",msg,options);
        console.log(client.subscribe("patri"))
    }
    count+=1;
    if (count==2) //ens 
        clearTimeout(timer_id); //stop timer
        client.end();	
    }

//////////////

var topic="patri";
var message="ALOOOOOO";
var topic_list=["topic2","topic3","topic4","patri"];
var topic_o={"patri":0,"topic22":0,"topic33":1,"topic44":1};
console.log("subscribing to topics");
client.subscribe(topic,{qos:0}); //single topic
client.subscribe(topic_list,{qos:1}); //topic list
client.subscribe(topic_o); //object
var timer_id=setInterval(function(){publish(topic,message,options);},5000);
//notice this is printed even before we connect
console.log("end of ");

}

async function mqttConnect() {
    const con = 
    //  mqtt.connect(mqttConfig.MQTT_SERVER,
    //                                             {   clientId: mqttConfig.CLIENT_ID,
    //                                                 username: mqttConfig.USERNAME, 
    //                                                 password: mqttConfig.PASSWORD, 
    //                                                 port: mqttConfig.PORT 
    //                                             });

    mqtt.connect("mqtt://soldier.cloudmqtt.com",
    {clientId:"STEFANINI0909",
        username: 'bvqnjxaz', 
        password: 'mRCgh4BPQqGw', 
        port: 16418});
        
        //con.reconnect()
        console.log(con.connected)

        
     con.on("connect",  function() {	
        console.log("connected  "+ con.connected);
     });

    con.on("error",function(error) {
            console.log("Can't connect" + error);        
     });

    return con;
 }

const options = { retain:true, qos:0};

module.exports = mqttClient
module.exports = options
module.exports = mqttConnect