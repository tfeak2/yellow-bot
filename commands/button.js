module.exports = {
    name: "button",
    description: "try out new discord buttons",
    execute(message, args, disbut){
        let button = new disbut.MessageButton()
        .setStyle('red') //default: blurple
        .setLabel('0') //default: NO_LABEL_PROVIDED
        .setID('number') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
        .setDisabled(); //disables the button | default: false

        message.channel.send(button);
    }
}