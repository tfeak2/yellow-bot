module.exports = {
    name: "kick",
    description: "kicks user that is pinged (admin)",
    execute(message, args) {
        var member = message.mentions.members.first();
        if (!member.kickable || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Failed to kick user, you dont have permission or this user is not kickable.");
        member.kick();
        message.channel.send(`${member.displayName} was kicked.`);
    }
}