"use strict";

var isBlank = require('is-blank');
var config = require("../../config/config")();
var jsonUtils = require("../utils/jsonUtils")();
var httpService = require("./httpService")();

module.exports = function(app) {
    var service = {};

    function getTranslate(req, res) {
        var text = req.params.text;
        
        var lang = "";
        var query = req.query;
        if (query && query.lang) {
            var lang = query.lang.substring(0, 2);
        }

        if (isBlank(text) || isBlank(lang)) {
            res.status(400).send("O texto e a linguagem de destino devem ser informados.");
            return;
        }

        function callBackOnEnd(response, body) {
            if (response.statusCode != 200) {
                res.status(response.statusCode).send(body);
                return;
            }

            try {
                var result = JSON.parse(body);
                result = jsonUtils.getValue(result[0]);
                result = jsonUtils.getValue(result[0]);
                result = jsonUtils.getValue(result[0]);

                res.send(result);
            } catch(error) {
                res.status(400).send("Ocorreu um erro ao realizar a tradução");
            }
        };

        var apiPath = config.translateUrl + lang + config.translateText + text;
        httpService.get(apiPath, callBackOnEnd);
    }

    service.getTranslate = getTranslate;
    return service;
};