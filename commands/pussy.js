const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "pussy",
        description: "pussy",
        usage: "",
        aliases: ["p"],
    },

    run: async function(client, message, args) {
        number = 1;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
            message.channel.send ( {files: ["./images/pussy/" + imageNumber + ".png"]} )
            message.channel.send("😘 Miam")
          }
        }