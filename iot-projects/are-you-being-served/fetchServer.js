// fetchServer.js file

const http = require("http");
var port = 7777;

http.createServer(async function (req, res) {
    var args = process.argv.slice(2);
    var url = args[0] ? args[0] : "https://ahollard.github.io";
    res.writeHead(200, { "Content-Type": args[1]});
    var fetchResponse = await fetch(url);
    if (fetchResponse.ok) {
        const html = await fetchResponse.text();
        res.write(html);
    } else {
        res.write('error' + fetchResponse.statusText + fetchResponse.status);
    }
    res.end();
})
.listen(port);

