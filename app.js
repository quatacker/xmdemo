var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('I LOVE TACOS!')
})

module.exports = app;
