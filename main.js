const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log('Loading Commands...')
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
    console.log(`Loading ${command.name}...`)
}

const cooldowns = new Discord.Collection();

const activities_list = [
    "the bored game", 
    "obey the discord api",
    "with some code", 
    "with JavaScript",
    "the pog game",
    "break the targets",
    "nothing",
    "●_●",
    "(✌ﾟ∀ﾟ)☞",
    "with my source code (https://github.com/The0Show/the0show-utilities btw)",
];

client.once('ready', () => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setPresence({ activity: { name: (activities_list[index]) + ' | >help' }, status: 'dnd' }); // sets bot's activities to one of the phrases in the arraylist.
    console.log('Ready!');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setPresence({ activity: { name: (activities_list[index]) + ' | >help' }, status: 'dnd' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(message.author.bot){
        return;
    }

    if (!message.content.startsWith(prefix)){
        return;
    }

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    
    if (!command) return

    if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    if(!message.member.hasPermission(command.userPermissions)) return message.reply('you don\'t have the required permissions to run this command!')

    try {
	    command.execute(message, args, client);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!\n```\n' + error + '\n```');
    }

    client.on('rateLimit', () => {
        console.log('I\'m getting ratelimited!')
    })

});

client.login(token);