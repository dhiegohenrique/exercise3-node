"use strict";
var isBlank = require("is-blank");

module.exports = function() {
    var utils = {};

    function getValue(jsonValue) {
        if (isBlank(jsonValue)) {
            throw "Não foi possível recuperar o valor do JSON.";
        }

        return jsonValue;
    };

    utils.getValue = getValue;
    return utils;
};