module.exports = {
    execute(message) {
        if (message.author.id != 402975987186401304) return message.channel.send("Only owner can do that!");
        var input = message.content.substring(message.content.lastIndexOf("<") + 1, message.content.lastIndexOf(">"));
        var output = eval('(' + input + ')');
        message.channel.send("` Input: " + input + " \n Output: " + output + " `");
    }
}