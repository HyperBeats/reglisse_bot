const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "resume",
        description: "To resume the paused music",
        usage: "",
        aliases: [],
    },

    run: async function(client, message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            let xd = new MessageEmbed()
                .setDescription("▶ Reprendre la musique pour vous!")
                .setColor("YELLOW")
                .setAuthor("La musique a été reprise!", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            return message.channel.send(xd);
        }
        return sendError("Il n'y a rien qui joue dans ce serveur.", message.channel);
    },
};