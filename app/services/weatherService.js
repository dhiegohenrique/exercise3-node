"use strict";

var config = require("../../config/config")();
var httpService = require("./httpService")();

module.exports = function(app) {
    var service = {};

    function getWeather(req, res) {
        var city = req.params.city;
        var apiPath = config.apiUrl + city + config.apiKey + config.apiUnits;
        
        var lang = req.query.lang;
        if (lang) {
            apiPath+= config.apiLang + lang.substring(0, 2);
        }

        function callBackOnEnd(response, body) {
            if (response.statusCode != 200) {
                res.status(response.statusCode).send(body);
                return;
            }

            var weatherConditions;
            try {
                weatherConditions = app.services.weatherConditionsService.getWeatherConditions(body);
            } catch(error) {
                response.statusCode = 400;
            }

            res.status(response.statusCode).send(weatherConditions);
        };

        httpService.get(apiPath, callBackOnEnd);
    }

    service.getWeather = getWeather;
    return service;
};