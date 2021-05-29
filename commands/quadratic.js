module.exports = {
    name: "quadratic",
    description: "plug a, b, c values and will solve for x",
    execute(message, args){
        function isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
        }
        var a = args[1];
        var b = args[2];
        var c = args[3];
        //if(!isNumeric(a+b+c)) return message.channel.send("Numbers Only!");
        var x1 = (-b + (Math.sqrt(Math.pow(b, 2) -4*a*c))) / (2*a);
        var x2 = (-b - (Math.sqrt(Math.pow(b, 2) -4*a*c))) / (2*a);
        message.channel.send("`" + `Values: ${x1} OR ${x2}` + "`");
    }
}