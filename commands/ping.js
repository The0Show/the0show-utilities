async function theultimatepingcommand(message, args, client) {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}

module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['test', 'pong'],
    cooldown: 5,
    execute(message, args, client) {
        theultimatepingcommand(message, args, client)
    }
}