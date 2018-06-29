// this only uses Node, not Express



//This code imports the "http" module and uses it to create a server 
//(createServer()) that listens for HTTP requests on port 8000. 
//The script then prints a message to the console about what browser 
//URL you can use to test the server. The createServer() function 
//takes as an argument a callback function that will be invoked 
//when an HTTP request is received — this simply returns a response
//with an HTTP status code of 200 ("OK") and the plain text "Hello World".

//Load HTTP module
var http = require("http");

//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {

    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')