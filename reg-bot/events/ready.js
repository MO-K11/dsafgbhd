const Discord = require('discord.js');
const fta = require('../ayarlar.json');

var prefix = fta.prefix;

module.exports = client => {
  client.user.setStatus("idle");//buraya bilmiyosan eleme
 client.user.setActivity(fta.oyun);


}