module.exports = {
    name: "global",
    description: "sends your message to global chat",
    execute(message, client, Discord, globalChannels){
        if(message.author.bot) return;
        var edditedMessage = message.content.replace(">g ", "");
        edditedMessage = edditedMessage.replace(">global ", "");
        if(edditedMessage == null || edditedMessage == "") edditedMessage = "*Message had no text*";
        var embed = new Discord.MessageEmbed();
        embed.setColor(message.member.displayHexColor);
        embed.addField(`**${message.author.username}: **`, edditedMessage, true);
        message.attachments.each(element => {
            //test if url is image
            if(element.url.includes(".png") || element.url.includes(".jpg")){
                embed.setImage(element.url);
            }
            else{
                embed.addField(element.url);
            }
        })
        for(var i = 0; i<globalChannels.length; i++){
            if(client.channels.cache.has(globalChannels[i]))client.channels.cache.get(globalChannels[i]).send(embed);
        }
        message.delete();
    }
}