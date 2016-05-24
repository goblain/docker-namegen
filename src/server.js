var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var NameGenerator = require("name_generator");
  res.type('text/plain');
  res.send(NameGenerator());
});

app.listen(80);

