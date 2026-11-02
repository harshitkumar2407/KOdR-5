const http = require("http")

const server = http.createServer((req, res) => {
    console.log("server is running");
    res.end("ok")
})

server.listen(3000)