
const fta1 = require("discord.js");
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message, args) {

    const fta = new fta1.MessageEmbed()
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    .setColor('RANDOM')
    .setTitle(`» ${client.user.username} Yardım Menüsü`)
    .addField('Bunudamı FTA yapsın ', 'discord.gg/safecode')
    .setFooter('FTA')
    message.channel.send(fta)  

    


    }
}