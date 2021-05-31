module.exports = {
    name: "button",
    description: "try out new discord buttons",
    execute(message, args, disbut){
        let yes = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('+')
        .setID('yes');

        let no = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('-')
        .setID('no');

        let hyperlink = new disbut.MessageButton()
        .setStyle('url')
        .setLabel("Link")
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

        message.channel.send("0", {
            buttons: [yes, no]
        });
    }
}