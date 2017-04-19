"use strict";

var jsonUtils = require("../utils/jsonUtils")();

function getCoord(app, jsonResponse) {
    var jsonCoord = jsonUtils.getValue(jsonResponse.coord);
    var coord = new app.models.Coord();

    coord.setLon(jsonUtils.getValue(jsonCoord.lon));
    coord.setLat(jsonUtils.getValue(jsonCoord.lat));

    return coord;
};

function getMain(app, jsonResponse) {
    var jsonMain = jsonUtils.getValue(jsonResponse.main);
    var main = new app.models.Main();

    main.setTemp(jsonUtils.getValue(jsonMain.temp));
    main.setPressure(jsonUtils.getValue(jsonMain.pressure));
    main.setHumidity(jsonUtils.getValue(jsonMain.humidity));
    main.setTempMin(jsonUtils.getValue(jsonMain.temp_min));
    main.setTempMax(jsonUtils.getValue(jsonMain.temp_max));

    return main;
};

function getSys(app, jsonResponse) {
    var jsonSys = jsonUtils.getValue(jsonResponse.sys);
    var sys = new app.models.Sys();

    sys.setCountry(jsonUtils.getValue(jsonSys.country));
    sys.setSunrise(jsonUtils.getValue(jsonSys.sunrise));
    sys.setSunset(jsonUtils.getValue(jsonSys.sunset));

    return sys;
};

function getWeather(app, jsonResponse) {
    var jsonWeather = jsonUtils.getValue(jsonResponse.weather[0]);
    var weather = new app.models.Weather();

    weather.setMain(jsonUtils.getValue(jsonWeather.main));
    weather.setDescription(jsonUtils.getValue(jsonWeather.description));
    weather.setIcon(jsonUtils.getValue(jsonWeather.icon));
    
    return weather;
};

function getWind(app, jsonResponse) {
    var jsonWind = jsonUtils.getValue(jsonResponse.wind);
    return new app.models.Wind(jsonUtils.getValue(jsonWind.speed));
};

module.exports = function(app) {
    var service = {};

    function getWeatherConditions(response) {
        try {
            var jsonResponse = JSON.parse(response);
            var weatherConditions = new app.models.WeatherConditions(jsonUtils.getValue(jsonResponse.cod), jsonUtils.getValue(jsonResponse.name));
            
            weatherConditions.setCoord(getCoord(app, jsonResponse));
            weatherConditions.setMain(getMain(app, jsonResponse));
            weatherConditions.setSys(getSys(app, jsonResponse));
            weatherConditions.setWeather(getWeather(app, jsonResponse));
            weatherConditions.setWind(getWind(app, jsonResponse));
            
            return weatherConditions;
        } catch(error) {
            throw error;
        }
    }

    service.getWeatherConditions = getWeatherConditions;
    return service;
};