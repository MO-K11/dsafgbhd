const fta = require("discord.js");
const ftağ = require ("../ayarlar.json")

module.exports = {
  name: "unreg",
  description: "fta",
  execute(client, message, args) {


    if(!message.member.roles.cache.has(ftağ.kayıtyt)) return false;
    
    let rMember = message.guild.member(message.mentions.users.first());
     let role = message.mentions.roles.first();
     rMember.roles.remove(ftağ.gacırol);
    rMember.roles.remove(ftağ.herıfrol)
    rMember.roles.add(ftağ.kayıtsızrol)
    message.channel.send(new fta.MessageEmbed().setColor("GREEN").setDescription(ftağ.islembaşarılımsg));

  }
}