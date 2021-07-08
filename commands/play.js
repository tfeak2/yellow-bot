module.exports = {
    name: "play",
    description: "placeholder",
    execute(message, args, Discord){
        const ytdl = require("ytdl-core");
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { quality: 'highestaudio'}));
            console.log("Dispatcher Initialized!");
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => {
            console.log(err);
            message.channel.send("Something went wrong, are you connected to a voice channel?");
        });
    }
}