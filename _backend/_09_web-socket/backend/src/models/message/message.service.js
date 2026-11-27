const Message = require("./message.model");

const createMessage = async ({
    senderId,
    conversationId,
    content
}) => {

    const message = await Message.create({
        sender: senderId,
        conversation: conversationId,
        content
    });

    return message;

};

module.exports = {
    createMessage
};