"use strict";

function WeatherConditions(cod, cityName) {
    this.cod = cod;
    this.cityName = cityName;
};

WeatherConditions.prototype.setCoord = function(coord) {
    this.coord = coord;
};

WeatherConditions.prototype.setMain = function(main) {
    this.main = main;
};

WeatherConditions.prototype.setSys = function(sys) {
    this.sys = sys;
};

WeatherConditions.prototype.setWeather = function(weather) {
    this.weather = weather;
};

WeatherConditions.prototype.setWind = function(wind) {
    this.wind = wind;
};

module.exports = function() {
    return WeatherConditions;
};