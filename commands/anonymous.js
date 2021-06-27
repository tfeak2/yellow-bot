module.exports = {
    name: "anonymous",
    description: "sends message in channel named 'anonymous'",
    execute(args, message){
        var edditedMessage = message.content.replace(">a ", "");
        edditedMessage = edditedMessage.replace(">anonymous ", "");
        message.guild.channels.cache.get("858281539371401226").send(edditedMessage);
    }
}