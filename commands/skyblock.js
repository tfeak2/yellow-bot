module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        hypixel.getSkyblockMember('tfeak2').then(member => {
            message.channel.send(...member.entries());
          }).catch(e => {
            console.log(e);
          })
    }
}