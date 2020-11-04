module.exports = {
    name: 'eval',
    description: 'Run any javascript code.',
    aliases: ['execute', 'js'],
    args: true,
    guildOnly: true,
    usage: '<javascript code>',
    cooldown: 5,
    userPermissions: ['ADMINISTRATOR'],
    execute(message, args, client) {
        const result = eval(args[0])
        message.channel.send('Code ran:\n```js\n' + args[0] + '\n```\nResult:\n```\n' + result + '\n```')
    }
}