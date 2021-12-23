module.exports = {
    name:'gioco',
    aliases: [],
    permissions: [],
    description:"fa cose",
    async execute(message, args, Discord, client){
        const channel = '854340548697391134';
       

        const Rocket = message.guild.roles.cache.find(role => role.name === "Rocket");
        const Valorant = message.guild.roles.cache.find(role => role.name === "Valorant");
    



        const valorantemoji = '🏹'
        const rocketleagueemoji = '🚕'

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Devi giocare una competitiva?')
            .setDescription('Seleziona un gioco a cui giocare\n\n'
                + `${valorantemoji} Per giocare a Valorant\n`
                + `${rocketleagueemoji}Per giocare a Rocket League\n`);
               

        let messageEmbed = await message.channel.send(embed);setTimeout(() => messageEmbed.delete(), 1800000);
        
        messageEmbed.react(valorantemoji);
        messageEmbed.react(rocketleagueemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === valorantemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Valorant);
                }
                if (reaction.emoji.name === rocketleagueemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Rocket);
                 } else{return;
            }}
                
            
 
        });
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === valorantemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Valorant);
                }
            }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === rocketleagueemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Rocket);
                }
            }else{
                return;
            }
        });
    }
}