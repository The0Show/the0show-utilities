module.exports = {
    name: 'avatar',
    description: 'Ping!',
    aliases: ['pfp'],
    cooldown: 5,
    execute(message, args, client) {
        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }

        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('please use a proper mention if you want to see someone else\'s avatar (this could also mean the user you mentioned isn\'t in this server).');
            }
    
            return message.channel.send(`${user.displayAvatarURL({ dynamic: true })}`);
        }
    
        return message.channel.send(`${message.author.displayAvatarURL({ dynamic: true })}`);
    }
}