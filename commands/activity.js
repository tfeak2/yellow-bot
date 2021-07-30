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

        betrayal = new MessageButton()
        .setStyle("green")
        .setLabel("Betrayal")
        .setID("?betrayal");
        fishing = new MessageButton()
        .setStyle("blurple")
        .setLabel("Fishing")
        .setID("?fishing");

        let buttonRow2 = new MessageActionRow()
            .addComponent(betrayal)
            .addComponent(fishing);
        message.channel.send("Select an action...", {
            components: [buttonRow, buttonRow2]
        });
    }
}