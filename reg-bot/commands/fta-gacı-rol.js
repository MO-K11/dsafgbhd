const fta = require("discord.js");
const db = require("fera.db");
const ftağ = require ("../ayarlar.json")


module.exports = {
  name: "k",
  description: "fta",
  execute(client, message, args) {







       if(!message.member.roles.cache.has(ftağ.kayıtyt)) return false;
     
       let rMember = message.guild.member(message.mentions.users.first());
        let role = message.mentions.roles.first();
        rMember.roles.add(ftağ.gacırol);
       rMember.roles.remove(ftağ.kayıtsızrol)
       message.channel.send(new fta.MessageEmbed().setColor("GREEN").setDescription(ftağ.islembaşarılımsg));
  }
}