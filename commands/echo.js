module.exports = {
    name: "echo",
    description: "repeats message",
    execute(message, args){
        message.channel.send(message.content.slice(6));
    }
}