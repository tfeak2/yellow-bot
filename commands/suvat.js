module.exports = {
    name: "suvat",
    description: "will attempt to solve values for you",
    execute(message, args, client, Discord) {
        var acceptedCharacters = ["s=", "u=", "v=", "a=", "t="];
        var context = {"characters": [], "values": []}
        acceptedCharacters.forEach(element => {
            if(message.content.indexOf(element) != -1){
                var slicedString = message.content.substring(message.content.indexOf(element) - 1)
                slicedString = slicedString.substring(0, slicedString.indexOf(","));
                message.channel.send(slicedString);
            }
        });
    }
}