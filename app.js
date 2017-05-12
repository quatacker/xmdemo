var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('I LOVE xmatters!')
})

module.exports = app;
