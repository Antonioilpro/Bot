module.exports = {
    name:'clear',
    description: "Pulisco come cannone",
    async execute(message,args) {
        if(!args[0] )message.reply("Perfavore metti un numero figlio di puttana");
        if(isNaN(args[0])) return message.reply("metti un numero testa di cazzo");
 
        if(args[0] > 100) return message.reply("non puoi farlo,metti un numero minore di 100");


        if(args[0] < 1 ) return message.reply("non puoi farlo coglione");

     await message.channel.messages.fetch({Limit: args[0]}).then(messages => 
        {message.channel.bulkDelete(args[0],messages,true)});
    }
}