module.exports = {
   name: "spam",
   description: "@someone a specified amount of times",
   execute(message, args){
      var x = args[2];
      if(x > 5){x = 5; message.channel.send("Dont be mean!, no more then five!")}
      if(args[2] == null){ x = 3; }

      for(var i = 0; i < x; i++){
         message.channel.send(args[1]);;
      }
   }
}
