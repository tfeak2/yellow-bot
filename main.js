//import discord lib set constants
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});
const disbut = require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require("discord-buttons")
const prefix = ">";
//const secret = require("./secret.json");
const script = require("./other/script.js");
//const mongoose = require("mongoose");
//const profileModel = require("./profileSchema.js");

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

/*mongoose
   .connect(process.env.MONGODB_SRV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then(() =>{
      console.log("Connected to the Database!");
   })
   .catch((err) => {
      console.log(err);
   });*/


//run when bot online
client.once("ready", () => {
   console.log("Online!");
   client.user.setActivity(">help");
});

//run when message in allowed channel
client.on("message", message => {
   
   /*async function asyncFunction(){
      let profileData;
      try{
         profileData = await profileModel.findOne({userID: message.author.id});
         if(!profileData){
            let profile = await profileModel.create({
               userID: message.author.id,
               serverID: message.guild.id,
               tokens: 1,
               msgCount: 1,
           });
           profile.save();
         }
      }
      catch{

      }

      await profileModel.findOneAndUpdate({
         userID: message.author.id,
      }, {
         $inc: {
            msgCount: 1,
         }
      });
   }
   asyncFunction();*/
   
   
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
      case "wpm": client.commands.get("wpm").execute(message, args); break;
      //case "links": client.commands.get("links").execute(message, args, Discord); break;
      //case "dates": client.commands.get("dates").execute(message, args, Discord); break;
      case "weather": client.commands.get("weather").execute(message, args, Discord); break;
      //case "tokens": client.commands.get("tokens").execute(message, args, Discord, profileData); break;
      case "calculator": client.commands.get("calculator").execute(message, args, disbut); break;
      //case "skyblock": client.commands.get("skyblock").execute(message, args, Discord, hypixel); break;
      //case "bazaar": client.commands.get("bazaar").execute(message, args, Discord, hypixel); break;
      //case "badapple": client.commands.get("badapple").execute(message, args, Discord); break;
      default: message.channel.send("Unknown Command");

   }
});

        one = new MessageButton()
        .setStyle("gray")
        .setLabel("1")
        .setID("1");
        two = new MessageButton()
        .setStyle("gray")
        .setLabel("2")
        .setID("2");
        three = new MessageButton()
        .setStyle("gray")
        .setLabel("3")
        .setID("3");

        //collum two

        four = new MessageButton()
        .setStyle("gray")
        .setLabel("4")
        .setID("4");
        five = new MessageButton()
        .setStyle("gray")
        .setLabel("5")
        .setID("5");
        six = new MessageButton()
        .setStyle("gray")
        .setLabel("6")
        .setID("6");

        //collum three

        seven = new MessageButton()
        .setStyle("gray")
        .setLabel("7")
        .setID("7");
        eight = new MessageButton()
        .setStyle("gray")
        .setLabel("8")
        .setID("8");
        nine = new MessageButton()
        .setStyle("gray")
        .setLabel("9")
        .setID("9");

        //collum four

        zero = new MessageButton()
        .setStyle("gray")
        .setLabel("0")
        .setID("0");

        plus = new MessageButton()
        .setStyle("blurple")
        .setLabel("+")
        .setID("+");
        minus = new MessageButton()
        .setStyle("blurple")
        .setLabel("-")
        .setID("-");
        times = new MessageButton()
        .setStyle("blurple")
        .setLabel("*")
        .setID("*");
        divide = new MessageButton()
        .setStyle("blurple")
        .setLabel("/")
        .setID("/");
        equals = new MessageButton()
        .setStyle("blurple")
        .setLabel("=")
        .setID("=");
        clear = new MessageButton()
        .setStyle("red")
        .setLabel("x")
        .setID("x");

        let buttonRow = new MessageActionRow()
            .addComponent(one)
            .addComponent(two)
            .addComponent(three)
            .addComponent(plus)
        let buttonRow2 = new MessageActionRow()
            .addComponent(four)
            .addComponent(five)
            .addComponent(six)
            .addComponent(minus)
        let buttonRow3 = new MessageActionRow()
            .addComponent(seven)
            .addComponent(eight)
            .addComponent(nine)
            .addComponent(times)
        let buttonRow4 = new MessageActionRow()
            .addComponent(zero)
            .addComponent(clear)
            .addComponent(divide)
            .addComponent(equals)
            

client.on('clickButton', async (button) => {
   button.defer();
   var editedMessage = (button.message.content).replace(/```/g, "");
   editedMessage = editedMessage.replace(/ /g, "");
   if(button.id == "="){
      return button.message.edit("```" + eval(editedMessage) + "```", {
         components: [buttonRow, buttonRow2, buttonRow3, buttonRow4]
      });
   }
   if(button.id == "x"){
      return button.message.edit("``` ```", {
         components: [buttonRow, buttonRow2, buttonRow3, buttonRow4]
      });
   }
   await button.message.edit("```" + editedMessage + button.id + "```",{
      components: [buttonRow, buttonRow2, buttonRow3, buttonRow4]
   });
 });

//login bot
client.login(process.env.token);
