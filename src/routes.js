const express = require('express');
const MqttController = require('./controllers/mqttController');
const HealthCheckController = require('./controllers/healthCheckController');

const routes = express.Router();

//routes.post('/sessions', SessionController.store);

//routes.get('/dashboard', DashboardController.show);

//routes.post('/spots/:spot_id/bookings', BookingController.store);

//routes.post('/booking/:booking_id/approval', ApprovalController.store);
//routes.post('/spots/:booking_id/bookings', RejectionController.store);

routes.post('/mqtt/save', MqttController.store);
routes.post('/mqtt/remo-hc', MqttController.remoHealthCheck);
routes.get('/mqtt', MqttController.index);
routes.get('/health-check', HealthCheckController.ack);

// MQTT SIMULATORS

routes.post('/mqtt/f-temperature', MqttController.remoTemperature);
routes.post('/mqtt/f-vibration', MqttController.remoVibration);
routes.post('/mqtt/f-soilhumity', MqttController.remoSoilHumitySensor);
routes.post('/mqtt/f-waterdetector', MqttController.remoWaterSensor);
routes.post('/mqtt/f-gasconcentration', MqttController.remoGasConcentration);
routes.post('/mqtt/f-humity', MqttController.remoHumity);
routes.post('/mqtt/f-airpressure', MqttController.remoAirPressureSensor);



module.exports = routes;