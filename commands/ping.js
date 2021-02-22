module.exports = {
   name: "ping",
   description: "sends bot latency",
   execute(message, args){
      message.channel.send(message.createdTimestamp - Date.now());
   }
}
