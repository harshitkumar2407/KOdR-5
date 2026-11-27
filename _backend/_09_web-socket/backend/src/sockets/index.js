const registerMessageHandlers =
    require("./handlers/message.handler");

const registerRoomHandlers =
    require("./handlers/room.handler");

const registerPresenceHandlers =
    require("./handlers/presence.handler");

const initializeSocketEvents = (io) => {

    io.on("connection", (socket) => {

        console.log("Connected:", socket.id);

        registerMessageHandlers(io, socket);

        registerRoomHandlers(io, socket);

        registerPresenceHandlers(io, socket);

        socket.on("disconnect", () => {
            console.log("Disconnected:", socket.id);
        });

    });
};

module.exports = initializeSocketEvents;