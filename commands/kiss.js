const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    info: {
        name: "kiss",
        description: "kissnpm ",
        usage: "",
        aliases: [""],
    },

    run: async function(client, message, args) {
      if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them");
      let { body } = await superagent.get("https://nekos.life/api/kiss");
      let embed = new MessageEmbed()
      .setColor("#ff9900")
      .setTitle(`OwO, ${message.author.username} kissed ${message.mentions.users.first().username}`)
      .setImage(body.url) 
      .setFooter(`© Reglisse Bot`);
      message.channel.send({embed})
  }
}
          