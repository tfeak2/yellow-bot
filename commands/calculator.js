module.exports = {
    name: "calculator",
    description: "calculator in discord",
    execute(message, args){
        const { MessageButton, MessageActionRow } = require("discord-buttons")
        one = new MessageButton()
        .setStyle("gray")
        .setLabel("1")
        .setID("1");
        two = new MessageButton()
        .setStyle("gray")
        .setLabel("2")
        .setID("2");
        three = new MessageButton()
        .setStyle("gray")
        .setLabel("3")
        .setID("3");

        //collum two

        four = new MessageButton()
        .setStyle("gray")
        .setLabel("4")
        .setID("4");
        five = new MessageButton()
        .setStyle("gray")
        .setLabel("5")
        .setID("5");
        six = new MessageButton()
        .setStyle("gray")
        .setLabel("6")
        .setID("6");

        //collum three

        seven = new MessageButton()
        .setStyle("gray")
        .setLabel("7")
        .setID("7");
        eight = new MessageButton()
        .setStyle("gray")
        .setLabel("8")
        .setID("8");
        nine = new MessageButton()
        .setStyle("gray")
        .setLabel("9")
        .setID("9");

        //collum four

        zero = new MessageButton()
        .setStyle("gray")
        .setLabel("0")
        .setID("0");

        plus = new MessageButton()
        .setStyle("blurple")
        .setLabel("+")
        .setID("+");
        minus = new MessageButton()
        .setStyle("blurple")
        .setLabel("-")
        .setID("-");
        times = new MessageButton()
        .setStyle("blurple")
        .setLabel("*")
        .setID("*");
        divide = new MessageButton()
        .setStyle("blurple")
        .setLabel("/")
        .setID("/");
        equals = new MessageButton()
        .setStyle("blurple")
        .setLabel("=")
        .setID("=");
        clear = new MessageButton()
        .setStyle("red")
        .setLabel("x")
        .setID("x");

        let buttonRow = new MessageActionRow()
            .addComponent(one)
            .addComponent(two)
            .addComponent(three)
            .addComponent(plus)
        let buttonRow2 = new MessageActionRow()
            .addComponent(four)
            .addComponent(five)
            .addComponent(six)
            .addComponent(minus)
        let buttonRow3 = new MessageActionRow()
            .addComponent(seven)
            .addComponent(eight)
            .addComponent(nine)
            .addComponent(times)
        let buttonRow4 = new MessageActionRow()
            .addComponent(zero)
            .addComponent(clear)
            .addComponent(divide)
            .addComponent(equals)

        message.channel.send("``` ```", {
            components: [buttonRow, buttonRow2, buttonRow3, buttonRow4]
        });
    }
}