const Discord = require('discord.js');
const client = new Discord.Client();

client.on('creator', () => {
    console.log('Sunt creat de Uktss!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
