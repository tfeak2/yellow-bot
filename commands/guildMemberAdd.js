const profileModel = require("../profileSchema");

module.exports = async(client, Discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        tokens: 1,
        msgCount: 1,
    });
    profile.save();
}