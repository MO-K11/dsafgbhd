const fta = require("discord.js");
const db = require("fera.db");
const ftağ = require ("../ayarlar.json")


module.exports = {
  name: "i",
  description: "fta",
  execute(client, message, args) {

   
    
    if(!message.member.roles.cache.has(ftağ.kayıtyt)) return message.channel.send (ftağ.yetkinykmsj)

    var user = message.mentions.users.first() ? message.guild.member(message.mentions.users.first()) : null;
    if (!user) return message.channel.send(new fta.MessageEmbed().setColor("RED").setDescription(ftağ.kımınmesajı));

    if ((args||[]).length < 2) return message.channel.send(new fta.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> isim ve yaş yazmalısın`));

    args = args.splice(1);
    var fta3 = args[args.length - 1];
    var fta2 = args.filter((e, i) => i != args.length - 1).join(' ');

    user.setNickname(`${fta2} | ${fta3}`);
    message.channel.send(new fta.MessageEmbed().setColor("GREEN").setDescription(ftağ.islembaşarılımsg));
 
    
    
 
 
    
    
    
   
    
 
 
  }

}