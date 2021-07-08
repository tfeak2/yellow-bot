module.exports = {
    name: "play",
    description: "placeholder",
    async execute(message, args, Discord){
        //libs
        const ytdl = require("ytdl-core");
        const yts = require( 'yt-search' );

        const r = await yts(message.content.slice(6));
        var v = r.videos[0];
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.play(ytdl(v.url, { quality: 'highestaudio'}));
            var embed = new Discord.MessageEmbed();
            embed.setTitle("Playing: " + v.title);
            embed.setThumbnail(v.thumbnail);
            message.channel.send(embed);
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => {
            console.log(err);
            message.channel.send("Something went wrong, are you connected to a voice channel?");
        });
    }
}