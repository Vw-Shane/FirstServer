var http = require ("http");

var PORT = 7000;
var PORT2 = 7500;

function requestHandler(request, response) {
response.end("<h1> Words </h1>");
}
function handleRequest(request, response) {
	response.end("<h1> other Words </h1>");
}

var server = http.createServer(requestHandler);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});
