const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "volume",
        description: "To change the server song queue volume",
        usage: "[volume]",
        aliases: ["v", "vol"],
    },

    run: async function(client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("Je suis désolé, mais vous devez être dans un salon vocal pour jouer de la musique !", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("Il n'y a rien qui joue dans ce serveur.", message.channel);
        if (!args[0]) return message.channel.send(`Le volume actuel est: **${serverQueue.volume}**`);
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
        let xd = new MessageEmbed()
            .setDescription(`Je règle le volume sur: **${args[0]/5}/5**(it will be divied by 5)`)
            .setAuthor("Gestionnaire de volume de serveur", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("BLUE")
        return message.channel.send(xd);
    },
};