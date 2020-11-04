module.exports = {
    name: 'membercount',
    description: 'See how many members are in a server.',
    aliases: ['members', 'servermembers'],
    guildOnly: true,
    cooldown: 5,
    execute(message, args) {
        message.guild.members.fetch().then(fetchedMembers => {
            message.channel.send(`There are currently ${fetchedMembers.size} members in this guild!`)
        });
        return
    }
}