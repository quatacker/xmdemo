var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('I love tacos!')
})

module.exports = app;
