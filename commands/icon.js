module.exports = {
   name: "icon",
   description: "get image of specified user",
   execute(message, args){
      const user = message.mentions.users.first() || message.author;
      message.channel.send(user.avatarURL());
   }
}
