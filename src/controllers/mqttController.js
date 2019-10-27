const express = require('express');
const MqttDataModel = require('../model/mqtt-model');
const mqttController = require('../mqtt/mqtt-controller');
const mqttSubscribe = require('../mqtt/subscriber');
const mqttPublisher = require('../mqtt/publisher');


module.exports = {

    connect(){
         let mqcon = mqttController.mqtt_boostrap();
    },

    async store(req, res) {
        mqttSubscribe.humitySensor();
        mqttSubscribe.gasSensor();
        mqttSubscribe.temperatureSensor();
    },

    async index(req, res) {
        const { sensor_type } = req.query;

        const data = await MqttDataModel.find({ topic : sensor_type });

        res.json(data);
    },

    async storeGas(req, res) {
        mqttPublisher.publishGasData(req);
    },

    async remoHealthCheck(req, res) {
        mqttPublisher.publishRemoHealthCheck(req);
        res.json('OK')
    },

    async remoTemperature(req, res) {
        mqttPublisher.publishTemperatureSensor(req);
        
        setTimeout(() => {
              res.json('OK');
        }, 1000);
      
    },

    async remoVibration(req, res) {
        mqttPublisher.publishVibrationSensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    async remoGasConcentration(req, res) {
        mqttPublisher.publishGasConcentrationSensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    async remoHumity(req, res) {
        mqttPublisher.publishHumitySensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    async remoSoilHumitySensor(req, res) {
        mqttPublisher.publishSoilHumitySensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    async remoWaterSensor(req, res) {
        mqttPublisher.publishWaterDetectorSensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    async remoAirPressureSensor(req, res) {
        mqttPublisher.publishAirPressureSensor(req);
        
        setTimeout(() => {
            res.json('OK');
      }, 1000);
    },

    
 }