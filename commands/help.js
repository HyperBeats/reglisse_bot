const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args) {

        let embed1 = new MessageEmbed()
            .setAuthor("Commandes Random de " + client.user.username, "")
            .setColor("RANDOM")
            .addField('**?invite**', "Permet d'invité le BOT si tu le souhaite")
            .setTimestamp()
            message.author.send(embed1);

            let embed2 = new MessageEmbed()
            .setAuthor("Commandes NSFW de " + client.user.username, "")
            .setColor("RANDOM")
            .addField('**?reglisse**')
            .addField('**?pussy**')
            .addField('**?lick**')
            .addField('**?ass**')
            .addField('**?kiss**')
            .addField('**?neko-anal**')
            .addField('**?neko**')
            .setTimestamp()
            message.author.send(embed2);

            let embed3 = new MessageEmbed()
            .setAuthor("Commandes Music")
            .setColor("RANDOM")
            .addField('**?play**', 'Te permet de joué de la Music avec le bot')
            .addField('**?skip**', "Permet de skip la Music joué")
            .addField('**?stop**', 'Permet de stop la Music')
            .addField('**?queue**', 'Permet de cree une playlist')
            .addField('**?pause**', "Permet de mettre en puase la Music")
            .addField('**?resume**', "Permet de mettre play sur le Music en pause")
            .addField('**?volume**', 'Permet de modifier le volume du bot')
            .addField('**?nowplaying**', 'Permet de conaitre le Ping du Bot')
            .setTimestamp()
            .setFooter('Copyright © 2020 Réglisse Bot', '');
            message.author.send(embed3);


        message.channel.send(`**Va voir tes dm**`);

    }
}