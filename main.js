//import discord lib set constants
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});
const disbut = require('discord-buttons')(client);
const prefix = ">";
//const secret = require("./secret.json");
const script = require("./other/script.js");

//redit api
const snoowrap = require("snoowrap");
const rclient = new snoowrap({
  userAgent: 'main.js',
  clientId: process.env.r_id,
  clientSecret: process.env.r_secret,
  username: process.env.r_username,
  password: process.env.r_password
});

//const Hypixel = require('hypixel-api-reborn');
//const hypixel = new Hypixel.Client(process.env.hypixel_api);

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
   if(message.content.includes("{") && message.content.includes("}") && !message.author.bot){script.execute(message)}
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
      case "quadratic": client.commands.get("quadratic").execute(message, args); break;
      //case "links": client.commands.get("links").execute(message, args, Discord); break;
      //case "dates": client.commands.get("dates").execute(message, args, Discord); break;
      case "weather": client.commands.get("weather").execute(message, args, Discord); break;
      case "calculator": client.commands.get("calculator").execute(message, args, disbut); break;
      //case "skyblock": client.commands.get("skyblock").execute(message, args, Discord, hypixel); break;
      //case "bazaar": client.commands.get("bazaar").execute(message, args, Discord, hypixel); break;
      //case "badapple": client.commands.get("badapple").execute(message, args, Discord); break;
      default: message.channel.send("Unknown Command");

   }
});
client.on('clickButton', async (button) => {
   button.defer();
   if(button.id == "="){
      return button.message.edit(eval(button.message.content));
   }
   await button.message.edit(button.message.content + button.id);
 });

//login bot
client.login(process.env.token);
