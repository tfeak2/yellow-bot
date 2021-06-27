module.exports = {
    name: "anonymous",
    description: "sends message in channel named 'anonymous'",
    execute(message, args, client){
        var edditedMessage = message.content.replace(">a ", "");
        edditedMessage = edditedMessage.replace(">anonymous ", "");
        var anonymousChannels = ["858281539371401226"];
        for(var i = 0; i<anonymousChannels.length; i++){
            if(client.channels.cache.has(anonymousChannels[i]))client.channels.cache.get(anonymousChannels[i]).send(edditedMessage);
            message.channel.send("test");
        }
        message.delete();
    }
}