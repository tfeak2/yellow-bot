module.exports = {
    name: "global",
    description: "sends your message to global chat",
    execute(message, client, Discord, globalChannels){
        if(message.author.bot) return;
        var edditedMessage = message.content.replace(">g ", "");
        edditedMessage = edditedMessage.replace(">global ", "");
        var embed = new Discord.MessageEmbed();
        embed.setColor(message.member.displayHexColor);
        embed.addField(`**${message.author.username}: **`, edditedMessage, true);
        message.attachments.each(element => {
            embed.addField(element.url);
        })
        for(var i = 0; i<globalChannels.length; i++){
            if(client.channels.cache.has(globalChannels[i]))client.channels.cache.get(globalChannels[i]).send(embed);
        }
        message.delete();
    }
}