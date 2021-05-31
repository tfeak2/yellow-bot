module.exports = {
    name: "button",
    description: "try out new discord buttons",
    execute(message, args, disbut){
        var numbers;
        for(var i = 0; i<9; i++){
            numbers[i] = new disbut.MessageButton()
            .setStyle("gray")
            .setLabel(i.toString())
            .setID(i.toString());
        }

        message.channel.send("0", {
            buttons: numbers//[numbers]
        });
    }
}