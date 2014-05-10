var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

var port = 9000;
app.set('port', port);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/form', function(req, res) {
	res.render('index');
});

http.createServer(app).listen(port, function() {
	console.log('Express server listening on port: ' + port);
});
