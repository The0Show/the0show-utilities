module.exports = {
    name: 'slowmode',
    description: 'Set a channel\'s slowmode.',
    aliases: ['chatspeed', 'cooldown', 'channelratelimit'],
    args: true,
    usage: '<slowmode>',
    guildOnly: true,
    cooldown: 5,
    userPermissions: ['MANAGE_CHANNELS'],
    execute(message, args, client) {
        message.channel.setRateLimitPerUser(args[0])
        .then(() => {
            message.channel.send(`The slowmode was sucessfully set to ${args[0]} second(s).`)
        })
        .catch(error => {
            message.channel.send('Could not set the slowmode.\nError:\n```\n' + error + '\n```')
        })
    }
}