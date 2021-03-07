module.exports = {
    name: "ban",
    description: "bans user that is pinged (admin)",
    execute(message, args) {
        var member = message.mentions.members.first();
        message.channel.send(message.mentions.members);
        if (!member.bannable || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Failed to ban user, you dont have permission or this user is not bannable.");
        member.ban();
        message.channel.send(`${member.displayName} was banned.`);
    }
}