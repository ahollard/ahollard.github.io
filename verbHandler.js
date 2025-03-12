const http = require('http');
const port = 3000;

var data = "";
var secret = "i am cool ";
var notSecret = "i am nonchalant ";
var list = [];

http.createServer(function (req, res) {

    if (req.method === "GET") {

        res.writeHead(200, {'Content-Type': 'text/plain'});
if (req.url === "/secret") {
    res.end(secret);
} else {
    res.end(notSecret);
}
    } else if (req.method === "DELETE") {

        secret = undefined;
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("secret deleted");

    } else if (req.method === "PUT") {
        req.on("data", function(chunk) {
            secret += chunk.toString();
        });

        req.on("end", function(){
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(secret);
        });
    } else if (req.method === "POST") {
        req.on("data", function(chunk) {
            const incomingData = chunk.toString();
            list.push(incomingData);
        });

        req.on("end", function () {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Data added");
        })

    } else {

    }

}).listen(port);

console.log("Listening on port " + port);
console.log('http://localhost:3000');