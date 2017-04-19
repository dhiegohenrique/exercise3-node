"use strict";

module.exports = function(app) {
    var controller = {};
    var weatherService = app.services.weatherService;

    controller.getWeather = function(req, res) {
        return weatherService.getWeather(req, res);
    };

    return controller;
};