module.exports = {
    name: "global",
    description: "sends your message to global chat",
    execute(message, client, Discord, globalChannels){
        if(message.author.bot) return;
        var edditedMessage = message.content.replace(">g ", "");
        edditedMessage = edditedMessage.replace(">global ", "");
        var embed = new Discord.MessageEmbed();
        embed.setColor(message.member.displayHexColor);
        embed.setAuthor(message.author.username, message.author.avatarURL());
        embed.setFooter(message.guild.name, message.guild.bannerURL());
        embed.setDescription(edditedMessage);
        for(var i = 0; i<globalChannels.length; i++){
            if(client.channels.cache.has(globalChannels[i]))client.channels.cache.get(globalChannels[i]).send(embed);
        }
        message.delete();
    }
}