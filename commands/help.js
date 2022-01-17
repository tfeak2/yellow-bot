module.exports = {
    name: "help",
    description: "shows list of commands",
    execute(message, args, client, Discord) {
        var embed = new Discord.MessageEmbed();
        client.commands.forEach((item) => {
            embed.addField(item.name, item.description, true);
        });
        embed.setTitle("Help Page");
        embed.setColor("#31b073");
        embed.setDescription("List of all avaliable commands");
        message.channel.send(embed);
    }
}
