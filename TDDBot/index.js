require('dotenv').config();
const Discord = require('discord.js');
const Bot = new Discord.Client();

const TOKEN = process.env.TOKEN;
const prefix = '.';

Bot.login(TOKEN)
Bot.on('ready', (client)=>{
    console.log('Logged in as '+ Bot.user.tag);
})
Bot.on("message", async message=>{
    channel = Bot.channels.cache.get("840906710196420608");
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(`${prefix}tb`)){
        const ar = message.content.split(/ +/);
        let embed = new Discord.MessageEmbed()
            .setColor("#08D0EB")
            .setTitle("Click vào đây để ghé chơi và ủng hộ 1 view cho mình nhé !  ")
            .setURL(ar[1])
            .setDescription("Yo Yo mình livestream rồi đây ^^ ");
        channel.send(embed);
        channel.send("<@&605356715462098944>");
    }
  
})