module.exports = {
    name: "wpm",
    description: "Converts words into minutes, usage: >wpm <word count><f/m/s>",
    execute(message, args){
        var str = args[1];
        if (args[2] != null) str+=args[2];
        regexStr= str.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);
        let minutes = regexStr[0];
        var type = "Medium";
        switch(regexStr[1][0]){
            case "f": minutes /= 160; type = "fast"; break;
            case "m": minutes /= 130; type = "medium"; break;
            case "s": minutes /= 100; type = "slow"; break;
            default: minutes /= 130; type = "medium"; break;
        }
        message.channel.send(`Estimated time for **${regexStr[0]}** words is **${minutes}** minutes long at a **${type}** pace`);
    }
}