const http = require("http");
const app = require("./app");

const {
    initializeSocket
} = require("./config/socket");

const initializeSocketEvents =
    require("./sockets");

const server = http.createServer(app);

const io = initializeSocket(server);

initializeSocketEvents(io);

server.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});