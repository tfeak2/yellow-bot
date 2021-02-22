module.exports = {
   name: "reddit",
   description: "gets random submission from specified subreddit",
   execute(message, args, rclient, Discord){
      var sub;
      if(args[1] == null){
         sub = "memes";
      }else{
         sub = args[1];
      }
      function getImagePost(){
         rclient.getRandomSubmission(sub).then((value) => {
            if(value.is_video){getImagePost();}else{
               var embed = new Discord.MessageEmbed();
               embed.setImage(value.url);
               embed.setColor("#FF5700");
               embed.setTitle(value.title);
               embed.setFooter("By u/" + value.author.name);
               message.channel.send(embed);
            }
         });
      }
      getImagePost();
   }
}
