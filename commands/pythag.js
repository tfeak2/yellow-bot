module.exports = {
   name: "pythag",
   description: "give *a & b* and it will calculate",
   execute(message, args){
      var output = Math.sqrt(Math.pow(args[1], 2) + Math.pow(args[2], 2));
      message.channel.send(output);
   }
}
