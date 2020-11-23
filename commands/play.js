const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const sendError = require("../util/error")

module.exports = {
    info: {
        name: "play",
        description: "Pour joué de la Music",
        usage: "<song_name>",
        aliases: ["p"],
    },

    run: async function(client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("Tu doit etres dans un salon vocal pour ecouté de la Music!", message.channel);

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError("Je ne peux pas me connecter à votre canal vocal, assurez-vous que j'ai les autorisations nécessaires !", message.channel);
        if (!permissions.has("SPEAK")) return sendError("Je ne peux pas me connecter à votre canal vocal, assurez-vous que j'ai les autorisations nécessaires !", message.channel);

        var searchString = args.join(" ");
        if (!searchString) return sendError("Erreur", message.channel);

        var serverQueue = message.client.queue.get(message.guild.id);

        var searched = await yts.search(searchString)
        if (searched.videos.length === 0) return sendError("Il semble que je n'ai pas pu trouver la chanson sur YouTube", message.channel)
        var songInfo = searched.videos[0]

        const song = {
            id: songInfo.videoId,
            title: Util.escapeMarkdown(songInfo.title),
            views: String(songInfo.views).padStart(10, ' '),
            url: songInfo.url,
            ago: songInfo.ago,
            duration: songInfo.duration.toString(),
            img: songInfo.image,
            req: message.author
        };

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
                .setAuthor("le a bien etais ajouté a la queue:", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
                .setThumbnail(song.img)
                .setColor("YELLOW")
                .addField("Titre", song.title, true)
                .addField("Temps", song.duration, true)
                .addField("Demendé par", song.req.tag, true)
                .setFooter(`Vues: ${song.views} | ${song.ago}`)
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 2,
            playing: true,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async(song) => {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                sendError("j'ai leave le channel vocale parce que je pense qu'il n'y a pas de chansons dans la file d'attente.", message.channel)
                queue.voiceChannel.leave(); //If you want your bot stay in vc 24/7 remove this line :D
                message.client.queue.delete(message.guild.id);
                return;
            }

            const dispatcher = queue.connection
                .play(ytdl(song.url))
                .on("finish", () => {
                    queue.songs.shift();
                    play(queue.songs[0]);
                })
                .on("error", (error) => console.error(error));
            dispatcher.setVolumeLogarithmic(queue.volume / 5);
            let thing = new MessageEmbed()
                .setAuthor("Commence a joué:", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
                .setThumbnail(song.img)
                .setColor("BLUE")
                .addField("Tittre", song.title, true)
                .addField("Temps", song.duration, true)
                .addField("Demendé par", song.req.tag, true)
                .setFooter(`Vues: ${song.views} | ${song.ago}`)
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            channel.guild.voice.setSelfDeaf(true)
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`je ne peut pas rejoindre se channel: ${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return sendError(`je ne peut pas rejoindre se channel: ${error}`, message.channel);
        }
    }
};