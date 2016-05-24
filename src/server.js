var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res) {
  var NameGenerator = require("name_generator");
  res.type('application/json');
  res.send(JSON.stringify({ name: NameGenerator(), version: 1, hostname: os.hostname() }));
});

app.listen(80);

