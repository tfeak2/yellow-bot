module.exports = {
    name: "activity",
    description: "launch activity into voice channel",
    execute(message, args){
        const { MessageButton, MessageActionRow } = require("discord-buttons");
        youtube = new MessageButton()
        .setStyle("red")
        .setLabel("Youtube")
        .setID("?youtube");
        chess = new MessageButton()
        .setStyle("gray")
        .setLabel("Chess")
        .setID("?chess");
        poker = new MessageButton()
        .setStyle("blurple")
        .setLabel("Poker")
        .setID("?poker");

        let buttonRow = new MessageActionRow()
            .addComponent(youtube)
            .addComponent(chess)
            .addComponent(poker);
        message.channel.send("Select an action...", {
            components: [buttonRow]
        });
    }
}