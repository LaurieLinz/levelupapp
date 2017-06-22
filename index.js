var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
  fs.readFile("index.html", function(err, data){
    res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.write(data);
  res.end();
  });
  
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
    console.log("I'm listening on port 8000...")
});