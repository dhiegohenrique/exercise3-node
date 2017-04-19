"use strict";

var http = require("http");

module.exports = function() {
    var service = {};

    function get(url, callBackOnEnd) {
        http.get(url, function(response) {
            var body = "";
            
            response.on("data", function(data) {
                body+= data;
            });

            response.on("end", function() {
                if (typeof(callBackOnEnd) == "function") {
                    callBackOnEnd(response, body);
                }
            });
        });
    }

    service.get = get;
    return service;
};