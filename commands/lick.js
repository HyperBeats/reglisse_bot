const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "lick",
        description: "lick",
        usage: "",
        aliases: ["p"],
    },

    run: async function(client, message, args) {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
            message.channel.send ( {files: ["./images/lick/" + imageNumber + ".gif"]} )
            message.channel.send("😘")
          }
        }