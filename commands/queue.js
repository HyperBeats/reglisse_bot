const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "queue",
        description: "Pour afficher la file d'attente des chansons du serveur",
        usage: "",
        aliases: ["q", "list", "songlist", "song-list"],
    },

    run: async function(client, message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("Il n'y a rien qui joue dans ce serveur.", message.channel);

        let queue = new MessageEmbed()
            .setAuthor("La file d'attente des chansons du serveur", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("BLUE")
            .addField("Jouer maintenant", serverQueue.songs[0].title, true)
            .addField("Text Channel", serverQueue.textChannel, true)
            .addField("Voice Channel", serverQueue.voiceChannel, true)
            .setDescription(serverQueue.songs.map((song) => {
                if (song === serverQueue.songs[0]) return
                return `**-** ${song.title}`
            }).join("\n"))
            .setFooter("Actuellement, le volume du serveur est de " + serverQueue.volume)
        if (serverQueue.songs.length === 1) queue.setDescription(`Pas de chansons à jouer ensuite ajouter des chansons par \`\`${client.config.prefix}play <nom_music>\`\``)
        message.channel.send(queue)
    },
};