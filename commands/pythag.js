module.exports = {
   name: "pythag",
   description: "give *a & b* and it will calculate",
   execute(message, args){
      function isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
         }
      if(args.length == 5 && isNumeric(args[1]) && isNumeric(args[2]) && isNumeric(args[3]) && isNumeric(args[4])){
         var output = Math.sqrt(Math.pow((args[1] - args[2]), 2) + Math.pow((args[3] - args[4]), 2));
         var rounded = Math.round(output * 1000) / 1000;
         message.channel.send("`Result: "+ rounded +"`");
      }
      else if(isNumeric(args[1]) && isNumeric(args[2])){
         var output = Math.sqrt(Math.pow(args[1], 2) + Math.pow(args[2], 2));
         var rounded = Math.round(output * 1000) / 1000;
         message.channel.send("`Result: "+ rounded +"`");
      }else return message.channel.send("Numbers only!")

   }
}
