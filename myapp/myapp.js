//To use the library you call the require() function as shown below.
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})