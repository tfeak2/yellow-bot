module.exports = {
    name: "tokens",
    description: "shows your amount of tokens",
    execute(message, args, Discord, profileData){
        message.channel.send(`${message.author} has sent ${profileData.msgCount} messages in this server.`);
    }
}