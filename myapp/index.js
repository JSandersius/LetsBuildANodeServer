//This code shows a minimal "HelloWorld" Express web application.
//This imports the "express" module and uses it to create a server
//(app) that listens for HTTP requests on port 8000 and prints a 
//message to the console explaining what browser URL you can use 
//to test the server. The app.get() function only responds to 
//HTTP GET requests with the specified URL path ('/'), in this 
//case by calling a function to send our Hello World! message. 



//To use the library you call the require() function as shown below.
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

