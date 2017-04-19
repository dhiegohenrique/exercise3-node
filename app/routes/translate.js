"use strict";

module.exports = function(app) {
    var translateController = app.controllers.translateController;

    app.route("/translate/:text")
        .get(translateController.getTranslate);
};