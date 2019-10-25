const mqtt = require('mqtt');

module.exports = {
    async mqtt_boostrap() {
      return con = mqtt.connect("mqtt://soldier.cloudmqtt.com",
            {
                clientId: "CASA099",
                username: 'bvqnjxaz',
                password: 'mRCgh4BPQqGw',
                port: 16418
            });

        con.on("connect", function () {
            //console.log("connected  "+ con.connected); 
        });

        con.on("error", function (error) { console.log("Can't connect" + error); });


        //console.log(con.connected)   
        if (!con.connected) {
            con.reconnect();
        }
        return con;
    }
}