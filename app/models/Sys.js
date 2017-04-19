"use strict";

function Sys() {

};

Sys.prototype.setCountry = function(country) {
    this.country = country;
};

Sys.prototype.setSunrise = function(sunrise) {
    this.sunrise = sunrise;
};

Sys.prototype.setSunset = function(sunset) {
    this.sunset = sunset;
};

module.exports = function(){
    return Sys;
};