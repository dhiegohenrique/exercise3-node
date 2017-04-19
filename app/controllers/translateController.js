"use strict";

module.exports = function(app) {
    var controller = {};
    var translateService = app.services.translateService;

    controller.getTranslate = function(req, res) {
        return translateService.getTranslate(req, res);
    };

    return controller;
};