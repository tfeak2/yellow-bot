module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        hypixel.getSkyblockMember(args[1]).then(member => {
            // 'Cucumber' - profile name
            message.channel.send("Purse: " + member.purse);
          }).catch(e => {
            message.channel.send(e);
          })
    }
}