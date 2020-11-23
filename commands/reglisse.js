const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
    info: {
        name: "reglisse",
        description: "reglisse",
        usage: "",
        aliases: ["np"],
    },

    run: async function(client, message, args) {
        number = 47;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
            message.channel.send ( {files: ["./images/dick/" + imageNumber + ".png"]} )
            message.channel.send("😘 Miam")
          }
        }