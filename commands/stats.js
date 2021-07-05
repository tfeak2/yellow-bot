module.exports = {
    name: "stats",
    description: "gives server details",
    execute(message, args, Discord){
        var embed = new Discord.MessageEmbed();
        embed
            .setTitle(message.guild.name)
            .addField("Member Count: ", message.guild.memberCount)
            .addField("Owner: ", message.guild.owner == null ? "error" : message.guild.owner.displayName)
            .addField("Region: ", message.guild.region)
            .addField("Birthday: ", message.guild.createdAt)
            .addField("Boosts: ", message.guild.premiumSubscriptionCount);
        message.channel.send(embed);
    }
}