var express = require('express');
var app = express();
var os = require('os');
var sleep = require('sleep');

// sleep to simulate warmup
sleep.sleep(15);

app.get('/', function(req, res) {
  var NameGenerator = require("name_generator");
  res.type('application/json');
  res.send(JSON.stringify({ name: NameGenerator(), version: 1, hostname: os.hostname() }));
});

app.listen(80);

