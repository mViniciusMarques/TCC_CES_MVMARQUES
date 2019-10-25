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
routes.post('/mqtt/savegas', MqttController.storeGas);
routes.post('/mqtt/remo-hc', MqttController.remoHealthCheck);
routes.get('/mqtt', MqttController.index);
routes.get('/health-check', HealthCheckController.ack);


module.exports = routes;