var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var config = require("./config")();
var favicon = require("serve-favicon");
var path = require("path");

module.exports = function() {
    var app = express();

    app.set("port", config.port || 3000);
    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    app.use(express.static("./public"));
    // app.use(express.static(path.join(__dirname, "public")));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require("method-override")());
    app.use(favicon(path.join(__dirname, "../public/resources", "favicon.ico")))

    load("models", { cwd: "app" })
        .then("services")
        .then("controllers")
        .then("routes")
        .into(app);

    app.get("*", function(req, res) {
        res.status(404).render("404");
        // res.render("../public/views/404.html");
        // res.render("../views/404.html");
    });

    return app;
};