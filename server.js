'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serveIndex = require('serve-index')

createStaticIndex('/101-basic');
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) console.log(err);
  console.log('Server Listening on port: ' + port);
});

function createStaticIndex(dir) {
	if (typeof dir !== 'string') return console.log('Err: createStaticIndex takes a string');
	app.use(dir, serveIndex(__dirname + dir));
}
