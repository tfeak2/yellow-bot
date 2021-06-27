module.exports = {
    name: "anonymous",
    description: "sends message in channel named 'anonymous'",
    execute(message, args, client){
        var edditedMessage = message.content.replace(">a ", "");
        edditedMessage = edditedMessage.replace(">anonymous ", "");
        var anonymousChannels = ["858281539371401226"];
        for(var element in anonymousChannels){
            if(client.channels.cache.has(element))client.channels.cache.get(element).send(edditedMessage);
        }
        message.channel.send(client.channels.cache.size);
        message.delete();
    }
}