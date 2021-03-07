//import discord lib set constants
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});
const prefix = ">";
const secret = require("./secret.json");
const script = require("./other/script.js");

//redit api
const snoowrap = require("snoowrap");
const rclient = new snoowrap({
  userAgent: 'main.js',
  clientId: secret.r_id,
  clientSecret: secret.r_secret,
  username: secret.r_username,
  password: secret.r_password
});

//command file manager
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}

//run when bot online
client.once("ready", () => {
   console.log("Online!");
   client.user.setActivity(">help");
});

//run when message in allowed channel
client.on("message", message => {
   //if(message.content.includes("<") && message.content.includes(">") && !message.author.bot){script.execute(message)}
   if(!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(" ");

   //test for different command strings
   switch (args[0]){

      case "ping": client.commands.get("ping").execute(message, args); break;
      case "reddit": case "r": client.commands.get("reddit").execute(message, args, rclient, Discord); break;
      case "purge": client.commands.get("purge").execute(message, args); break;
      case "pythag": client.commands.get("pythag").execute(message, args); break;
      case "icon": client.commands.get("icon").execute(message, args); break;
      case "ban": client.commands.get("ban").execute(message, args); break;
      case "kick": client.commands.get("kick").execute(message, args); break;
      case "help": client.commands.get("help").execute(message, args, client, Discord); break;
      case "links": client.commands.get("links").execute(message, args, Discord); break;
      case "weather": client.commands.get("weather").execute(message, args); break;

      default: message.channel.send("Unknown Command"); break;

   }
});
//login bot
client.login(secret.token);
