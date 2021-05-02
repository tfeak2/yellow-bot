module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        
        hypixel.getSkyblockMember('tfeak2').then(member => {
            function logMapElements(value, key, map) {
                message.channel.send(`m[${key}] = ${value}`);
              }
            member.forEach(logMapElements);
          }).catch(e => {
            console.log(e);
          })
    }
}