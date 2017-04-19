"use strict";

function Weather() {
};

Weather.prototype.setMain = function(main) {
    this.main = main;
};

Weather.prototype.setDescription = function(description) {
    this.description = description;
};

Weather.prototype.setIcon = function(icon) {
    this.icon = icon;
};

module.exports = function(){
    return Weather;
};