module.exports = {
   name: "purge",
   description: "deletes specified amount of messages",
   execute(message, args){
      if(args[1] != null && message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")){message.channel.bulkDelete(args[1]);}
   }
}
