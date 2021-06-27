module.exports = {
    name: "anonymous",
    description: "sends message in channel named 'anonymous'",
    execute(message, args, client){
        var edditedMessage = message.content.replace(">a ", "");
        edditedMessage = edditedMessage.replace(">anonymous ", "");
        var anonymousChannels = ["858281539371401226"];
        client.guilds.cache.array.forEach(guild => {
            for(var i = 0; i<anonymousChannels.length; i++){
                guild.channels.cache.find(channel => channel.anonymousChannels[i]).send(edditedMessage);
            }
        });
        message.delete();
    }
}