const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent

] });
client.once(Discord.Events.ClientReady, () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.login(token);