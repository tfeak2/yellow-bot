module.exports = {
    name: "skyblock",
    description: "gets skyblock profile data",
    execute(message, args, Discord, hypixel){
        
        hypixel.getSkyblockMember(args[1]).then(member => {
            function logMapElements(value, key, map) {
                var embed = new Discord.MessageEmbed();
                var profile = member.get(key);
                if(profile.skills != null){
                    embed.setTitle(key);
                    embed.addField("Purse:", Math.round(profile.purse), false);
                    embed.addField("Farming:", profile.skills.farming.level, false);
                    embed.addField("Mining:", profile.skills.mining.level, false);
                    embed.addField("Combat:", profile.skills.combat.level, false);
                    embed.addField("Foraging:", profile.skills.foraging.level, false);
                    
                    message.channel.send(embed);
                }
              }
            member.forEach(logMapElements);
          }).catch(e => {
            console.log(e);
          })
    }
}