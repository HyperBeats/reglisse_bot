const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "stop",
        description: "To stop the music and clearing the queue",
        usage: "",
        aliases: [],
    },

    run: async function(client, message, args) {
        const channel = message.member.voice.channel
        if (!channel) return sendError("Je suis désolé, mais vous devez être dans un canal vocal pour jouer de la musique !", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("Il n'y a rien à jouer que je puisse arrêter pour vous.", message.channel);
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end("Music Stop");
        message.react("✅")
    },
};