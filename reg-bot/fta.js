const Discord = require("discord.js")
const client = new Discord.Client()
const db = require("fera.db");
const fs = require("fs")
const ayarlar = require ("./ayarlar.json")
const data = require ("./database.json")
require('./util/eventLoader.js')(client);
let PREFIX = ayarlar.prefix



const { readdirSync } = require("fs");
const { join } = require("path");



client.on("warn", info => console.log(info));

client.on("error", console.error)    

client.on("ready", () => {
  console.log("Bot Açıldı!")
})


client.commands = new Discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 



client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  


  if(message.content.startsWith(PREFIX)) {
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) 
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 

      client.commands.get(command).execute(client, message, args) 
    
    console.log(`${message.guild.name}: ${message.author.tag} Used ${client.commands.get(command).name} in #${message.channel.name}`)
    } catch (err) { 
      console.log(err)
      const hataembed = new Discord.MessageEmbed()
      .setDescription("**An error was encountered! Error:" + "`" + `${err}` + "`" + "**")
      .setColor("GREEN")
    }
    
  }
});



 


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g














  


client.on("ready", async () => {
  client.channels.cache.get(ayarlar.seskanalı).join();   
})




client.on('guildMemberAdd', member => {
  
  let channel = client.channels.cache.get(ayarlar.hgknl);
 
  channel.send(new Discord.MessageEmbed().setDescription(`
${member.user} hoşgeldin
•
${member.guild.memberCount} kadar kişi olduk 
Yetkilierimiz senin ile ilgilencektir 
Lütfen Teyit odalarına gir ve bekle <&@kayıt yt ıd>`
))
});



const express = require("express")
const app = express()
app.get("/foo", (req, res, next) => {
    const foo = JSON.parse(req.body.jsonString)
})
process.on("unhandledRejection", (reason, promise) => {})



client.login(ayarlar.token)
