var app = require("./app.js")

var PORT = process.env.port || 3000;

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})