const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
    info: {
        name: "nowplaying",
        description: "To show the music which is currently playing in this server",
        usage: "",
        aliases: ["np"],
    },

    run: async function(client, message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
        let song = serverQueue.songs[0]
        let thing = new MessageEmbed()
            .setAuthor("Jouer maintenant", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setThumbnail(song.img)
            .setColor("BLUE")
            .addField("Titre", song.title, true)
            .addField("Temps", song.duration, true)
            .addField("Demendé par", song.req.tag, true)
            .setFooter(`Vues: ${song.views} | ${song.ago}`)
        return message.channel.send(thing)
    },
};