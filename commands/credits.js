const credits = {
    "fields": [
      {
        "name": "Credits",
        "value": `The0Show's Utilites created by The0Show\nThis bot is a fork of [**The0Show's Utilities**](https://github.com/The0Show/the0show-utilities).`
      }
    ]
  };

module.exports = {
    name: 'credits',
    description: 'Who made this?!?',
    aliases: ['about', 'creator'],
    cooldown: 5,
    execute(message, args) {
        message.channel.send({ embed: credits })
    }
}