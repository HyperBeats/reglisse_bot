const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "invite",
        description: "invite le bot",
        usage: "[command]",
        aliases: ["commands", "invite"]
    },

    run: async function(client, message, args) {
        let embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Invite le Bot's")
            .setURL('https://discord.com/oauth2/authorize?client_id=764610547261243403&scope=bot&permissions=1539137')
        if (!args[0]) return message.channel.send(embed)

    }
}