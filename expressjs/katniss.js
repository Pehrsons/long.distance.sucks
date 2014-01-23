var express = require('express'); 

var app = express();
var port = 8080;

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.send("Hello, Andy!");
});

app.listen(port);
