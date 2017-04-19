"use strict";

function Coord() {
};

Coord.prototype.setLon = function(lon) {
    this.lon = lon;
};

Coord.prototype.setLat = function(lat) {
    this.lat = lat;
}

module.exports = function() {
    return Coord;
};