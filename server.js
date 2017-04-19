var config = require('./config/config')();
var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(config.port, function() {
    console.log('Express Https Server: ' + 
        config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});