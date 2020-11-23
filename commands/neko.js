const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    info: {
        name: "neko",
        description: "neko",
        usage: "",
        aliases: [""],
    },

    run: async function(client, message, args) {
    let { body } = await superagent.get("https://nekos.life/api/v2/img/neko");
    let embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO`)
    .setImage(body.url)
    .setFooter(`© Reglisse Bot`);
    message.channel.send({embed});
  }
}