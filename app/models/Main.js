"use strict";

function Main() {
};

Main.prototype.setTemp = function(temp) {
    this.temp = temp;
};

Main.prototype.setPressure = function(pressure) {
    this.pressure = pressure;
};

Main.prototype.setHumidity = function(humidity) {
    this.humidity = humidity;
};

Main.prototype.setTempMin = function(tempMin) {
    this.tempMin = tempMin;
};

Main.prototype.setTempMax = function(tempMax) {
    this.tempMax = tempMax;
};

module.exports = function(){
    return Main;
};