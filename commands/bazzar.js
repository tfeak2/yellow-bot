module.exports = {
    name: "bazzar",
    description: "gets bazza inventory",
    execute(message, args, Discord, hypixel){
        hypixel.getSkyblockBazaar().then(products =>{
            var embed = new Discord.MessageEmbed();
            embed.setTitle("Bazzar Inventory");
            products.forEach(element => {
                embed.addField(`${element.productId}: `, `buy: ${element.status.buyPrice} sell: ${element.status.sellPrice}`, true)
            });
            message.channel.send(embed);
          })
          .catch(console.log);
    }
}