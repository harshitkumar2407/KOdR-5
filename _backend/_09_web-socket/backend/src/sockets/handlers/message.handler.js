const messageService =
    require("../../modules/message/message.service");

const registerMessageHandlers = (io, socket) => {

    socket.on("message:send", async (data, ack) => {

        try {

            const message =
                await messageService.createMessage({
                    senderId: socket.user.id,
                    conversationId: data.conversationId,
                    content: data.content
                });

            io.to(data.conversationId)
                .emit("message:received", message);

            ack?.({
                success: true,
                messageId: message._id
            });

        } catch (error) {

            ack?.({
                success: false,
                error: error.message
            });

        }

    });

};

module.exports = registerMessageHandlers;