const Discord = require('discord.js');
const { token , prefix } = require('./config.json');

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent

] });
client.once(Discord.Events.ClientReady, () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Discord.Events.MessageCreate,(message)=>{
    if(message.author.bot) return;

    
//hi
    if(message.content === prefix +'hi'){
        message.reply({ content :`hello`});
    }

// go
if (message.content === prefix + 'go') {
    // احصل على اسم الشخص الذي كتب الرسالة
    const authorName = message.member.displayName;
    // رد برسالة تحتوي على "hello" واسم الشخص
    //message.channel.send();
    message.reply({ content :`hello ${authorName} How can we help you?`});
}
//embed
    if(message.content === prefix +'embed'){
        let Embed = new Discord.EmbedBuilder()
        .setAuthor({ name: 'Some name', iconURL: message.guild.iconURL() })
        .setTitle('Embed')
        .setDescription('This is a embed')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .setColor('Red')
        .setThumbnail(message.guild.iconURL())
        .setImage(client.user.avatarURL())
        .setFooter({text:`${message.author.tag}`,iconURL:message.guild.iconURL()  })
        .setTimestamp()

        message.reply({ embeds:[Embed]})
    }

});

client.login(token);