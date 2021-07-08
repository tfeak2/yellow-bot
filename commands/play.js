module.exports = {
    name: "play",
    description: "placeholder",
    execute(message, args, Discord){
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./bben.mp3');
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