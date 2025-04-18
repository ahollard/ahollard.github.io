const http = require("http");
const port = 9999;
let serverStatus = {};

function requestListener(req, res) {
    try {
        if (req.method === "GET") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write(serverStatus.message);
        } else if (req.method === "PUT") {
            var body = "";
            req.on("data", function(data) {
               body += data;
               console.log(body)

            })
            req.on("end", function() {
                serverStatus = {};
                serverStatus= JSON.parse(body);
            })
            res.writeHead(200, {"Content-Type": "plain/text"});
            res.write("The server has been updated.")
        }
    } catch(error) {
        res.write("The server has no data.");
    } finally {
        res.write("-and the message arrived");
        res.end();
    }


}


const server = http.createServer(requestListener).listen(port);
