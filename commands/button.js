module.exports = {
    name: "button",
    description: "try out new discord buttons",
    execute(message, args, disbut){
        let yes = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Yes')
        .setID('yes');

        let no = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('No')
        .setID('no');

        let hyperlink = new disbut.MessageButton()
        .setStyle('url')
        .setLabel("Link")
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

        message.channel.send("Does Pineapple Belong On Pizza?", {
            buttons: [yes, no, hyperlink]
        });
    }
}