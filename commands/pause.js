const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "pause",
        description: "Pour mettre en pause la musique en cours dans le serveur",
        usage: "",
        aliases: [""],
    },

    run: async function(client, message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            let xd = new MessageEmbed()
                .setDescription("⏸ Mise en pause de la musique pour vous!")
                .setColor("YELLOW")
                .setAuthor("La musique a été mise en pause!", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            return message.channel.send(xd);
        }
        return sendError("Il n'y a rien qui joue dans ce serveur.", message.channel);
    },
};