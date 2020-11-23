const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "ass",
        description: "ass",
        usage: "",
        aliases: [""],
    },

    run: async function(client, message, args) {
            number = 1;
            imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
                message.channel.send ( {files: ["./images/ass/" + imageNumber + ".png"]} )
                message.channel.send("😘 Miam")
              }
            }
          