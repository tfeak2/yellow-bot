module.exports = {
    name: "reddit",
    description: "gets random submission from specified subreddit",
    execute(message, args, rclient, Discord) {
        var sub;
        if (args[1] == null) {
            sub = "memes";
        } else {
            sub = args[1];
        }

        function getImagePost() {
            rclient.getRandomSubmission(sub).then((value) => {

                if (value.over_18 && !message.channel.nsfw) return message.channel.send("Contained NSFW");
                if (args[1] == "poopy" || args[1] == "bigpenis") return message.channel.send("Blocked Subreddit");

                var embed = new Discord.MessageEmbed();
                embed.setImage(value.url);
                if (value.selftext != "") { embed.addField('Content: ', value.selftext, true); }
                embed.setColor("#FF5700");
                embed.setTitle(value.title);
                embed.setFooter("By u/" + value.author.name);
                message.channel.send(embed);

            }) || message.channel.send("Something went wrong");
        }
        getImagePost();
    }
}