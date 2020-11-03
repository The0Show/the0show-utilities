module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['test', 'pong'],
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Pong!')
    }
}