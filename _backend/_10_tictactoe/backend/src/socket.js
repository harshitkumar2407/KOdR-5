const { Server } = require("socket.io")

let myTurn = false; // "X" or "O"
let prevSocket = null;



const setupSocketServer =(httpServer)=>{
    const io = new Server(httpServer);

    io.on("connection",(socket)=>{

        socket.emit("my-symbol",{myTurn});

        myTurn = !myTurn;
        if(prevSocket != null){
            const oldUser = prevSocket.id;
            const newUser = socket.id;

            let roomName = oldUser + newUser
            console.log(roomName);

            socket.join(roomName)
            prevSocket.join(roomName);
            
            socket.to(roomName).emit("room-name",{roomN: roomName})
            prevSocket.to(roomName).emit("room-name",{roomN,roomName})
            prevSocket = null;
        }
        prevSocket = socket;

        socket.on("move",(data)=>{
            const { roomData } = data
            console.log(data);
            socket.broadcast.to(roomData).emit("move",data);
        })

        socket.on("disconnect",()=>{
            console.log("User disconnected",socket.id);  
        })

    })

}


module.exports = {
    setupSocketServer
}