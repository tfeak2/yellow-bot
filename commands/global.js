module.exports = {
    name: "global",
    description: "sends your message to global chat",
    execute(message, client, Discord, globalChannels){
        if(message.author.bot) return;
        var edditedMessage = message.content.replace(">g ", "");
        edditedMessage = edditedMessage.replace(">global ", "");
        var embed = new Discord.MessageEmbed();
        embed.setDescription(edditedMessage);
        embed.setColor("#ffffff");
        embed.setFooter(message.author.username, message.author.displayAvatarURL);
        for(var i = 0; i<globalChannels.length; i++){
            if(client.channels.cache.has(globalChannels[i]))client.channels.cache.get(globalChannels[i]).send(embed);
        }
        message.delete();
    }
}