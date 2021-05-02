module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        
        hypixel.getSkyblockMember(args[1]).then(member => {
            function logMapElements(value, key, map) {
                var embed = new Discord.MessageEmbed();
                var profile = member.get(key);
                embed.setTitle(key);
                embed.addField("Purse:", profile.purse, true);
                embed.addField("Farming:", profile.skills.farming.level, true);
                embed.addField("Mining:", profile.skills.mining.level, true);
                embed.addField("Combat:", profile.skills.combat.level, true);
                embed.addField("Foraging:", profile.skills.foraging.level, true);
                
                message.channel.send(embed);
              }
            member.forEach(logMapElements);
          }).catch(e => {
            console.log(e);
          })
    }
}