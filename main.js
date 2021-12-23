//COSTANTI VARIE
const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');

const client = new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
 
const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./COMANDI').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./COMANDI/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready',() => {console.log('Il bot è online')})





//COMANDI VARI
client.on('message', message => {
if(!message.content.startsWith(prefix) || message.author.bot) return;


const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
const newEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('COMANDI BOT')
.setDescription('Descrizione della sintassi dei comandi')
.addFields({ name: '-clear [numero di messaggi]' ,value:'Pulisce la chat testuale'},
{ name: '-gioco',value:'Assegna il gioco a cui giochi' })
.setTimestamp()

if (command === 'clear') {
    client.commands.get('clear').execute(message,args);

}else if(command === 'gioco') {
    client.commands.get('gioco').execute(message, args, Discord, client);
}

if(command === 'comandi') {
  message.channel.send(newEmbed);

}


});



client.login('OTE4MjAxOTUyMTc5OTk0NjY1.YbD0NA.L9pEcCSQ96Em7Uorel-Jcvvg6Yg')