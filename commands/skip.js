const sendError = require("../util/error");

module.exports = {
    info: {
        name: "skip",
        description: "To skip the current music",
        usage: "",
        aliases: ["s"],
    },

    run: async function(client, message, args) {
        const channel = message.member.voice.channel
        if (!channel) return sendError("Je suis désolé, mais vous devez être dans un canal vocal pour jouer de la musique !", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("Il n'y a rien à jouer que je puisse Skip pour vous.", message.channel);
        serverQueue.connection.dispatcher.end("Musique Skip");
        message.react("✅")
    },
};