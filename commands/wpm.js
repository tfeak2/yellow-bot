module.exports = {
    name: "wpm",
    description: "Converts words into minutes, usage: >wpm <word count><f/m/s>",
    execute(message, args){
        var str = args[1];
        if (args[2] != null) str+=args[2];
        regexStr= str.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);
        let minutes = regexStr[0];
        switch(regexStr[1]){
            case "f": minutes /= 160; break;
            case "m": minutes /= 130; break;
            case "s": minutes /= 100; break;
            default: minutes /= 130; break;
        }
        message.channel.send("Estimated Time: " + minutes + "min");
    }
}