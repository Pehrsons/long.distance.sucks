var express = require('express'); // See http://expressjs.com/api.html
var logger = require('logfmt'); // See https://github.com/csquared/node-logfmt

logger.log({ "server": "starting" });

var app = express();
var port = 8080;

app.get('/', function(req, res) {
    logger.log({ "request": "received", "ip": req.ip, "url": "".concat(req.host, req.path) });
    res.send("Hello, Katniss!");
    logger.log({ "request": "sent" });
});

app.listen(port);
logger.log({ "server": "listening", "port": port });
