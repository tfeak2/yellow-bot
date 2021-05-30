module.exports = {
    name: "bazzar",
    description: "gets bazzar inventory",
    execute(message, args, Discord, hypixel){
        hypixel.getSkyblockBazaar().then(products =>{
            var embed = new Discord.MessageEmbed();
            embed.setTitle("Bazzar Inventory");
            embed.addField(products[0].productId, `Buy: ${products[0].status.buyPrice} Sell: ${products[0].status.sellPrice}`, true);
            message.channel.send(embed);
          })
          .catch(console.log);
    }
}