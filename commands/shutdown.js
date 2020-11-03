module.exports = {
    name: 'shutdown',
    description: 'Shutdown the bot.',
    aliases: ['poweroff'],
    cooldown: 5,
    execute(message, args) {
        if(!message.author.id === '468093150217371649') return
        message.reply('The bot will now shut down.\n'
                            + 'Confirm with a thumb up or deny with a thumb down.');

                    // Reacts so the user only have to click the emojis
                    message.react('👍').then(r => {
                            message.react('👎');
                    });

                    // First argument is a filter function
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                            message.reply('Shutting down...');
                                            //client.user.setPresence({ activity: { name: `Shutting down...` } }); // sets bot's activities to one of the phrases in the arraylist.
                                            setTimeout(() => {  process.exit(); }, 2000);
                                    }
                                    else
                                            message.reply('Operation canceled.');
                            }).catch(() => {
                                    message.reply('No reaction after 30 seconds, operation canceled');
                            });
    }
}