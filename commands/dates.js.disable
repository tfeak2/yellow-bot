module.exports = {
    name: "dates",
    description: "shows list of dates",
    execute(message, args, Discord) {
        const links = require("./dates.json");
        if (args[1] == "add" && args.length == 4) {
            if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("Failed to add date, you dont have permission.");
            links[args[2]] = [`**${args[2]}:**`, args[3]];
            return message.channel.send(`Successfully added ${args[2]}!`);
        }
        if (args[1] == "remove" && args.length == 3) {
            if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("Failed to remove date, you dont have permission.");
            delete links[args[2]];
            return message.channel.send(`Successfully removed ${args[2]}!`);
        }
        var embed = new Discord.MessageEmbed();
        embed.setTitle("Due-Dates: ");
        embed.setColor("#31b073");
        embed.setDescription("All important dates");

        for (var element in links) {
            embed.addFields({ name: links[element][0], value: links[element][1] });
        }
        message.channel.send(embed)
    }
}