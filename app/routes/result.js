"use strict";

module.exports = function(app) {
    var weatherControler = app.controllers.weatherController;

    app.route("/result/:city")
        .get(weatherControler.getWeather);

};