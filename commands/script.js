module.exports = {
   name: "script",
   description: "does math in {}",
   execute(message){
      var input = message.content.substring(message.content.lastIndexOf("<") + 1, message.content.lastIndexOf(">"));
      var output = eval('(' + input + ')');
      message.channel.send("` Input: " + input + " \n Output: " + output + " `");
   }
}
