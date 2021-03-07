module.exports = {
    name: "purge",
    description: "deletes specified amount of messages (admin)",
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Admin only!");
        if (args[1] != null) return message.channel.bulkDelete(args[1]);
    }
}