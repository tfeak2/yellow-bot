module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        hypixel.getSkyblockMember('tfeak2').then(member => {
            // 'Cucumber' - profile name
            message.channel.send(member.get('Orange').purse); // '52d9a36f66ce4cdf9a56ad9724ae9fb4'
          }).catch(e => {
            console.log(e);
          })
    }
}