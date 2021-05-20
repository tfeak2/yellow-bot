module.exports = {
    name: "suvat",
    description: "will attempt to solve values for you",
    execute(message, args, client, Discord) {
        var acceptedCharacters = ["s", "u", "v", "a", "t"];
        var table = {};
        acceptedCharacters.forEach(element => {
            if(message.content.indexOf(element + "=") != -1){
                var slicedString = message.content.substring(message.content.indexOf(element) - 1)
                slicedString = slicedString.substring(0, slicedString.indexOf(","));
                table[element].value = slicedString.substring(slicedString.indexOf("="));
            }
        });
        var embed = Discord.MessageEmbed();
        table.forEach(element => {
            embed.addFields({name: element, value: table[element].value, inline: false});
        });
        message.channel.send(embed);
    }
}