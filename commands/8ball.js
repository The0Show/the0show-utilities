function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: '8ball',
    description: 'Question the magic 8 ball.',
    aliases: ['eightball'],
    args: true,
    usage: '<question>',
    cooldown: 5,
    execute(message, args, client) {
        const outcome = getRandomInt(20)
        if(outcome == 0){
            message.channel.send('It is certain.')
        }
        if(outcome == 1){
            message.channel.send('It is decidedly so.')
            return;
        }
        if(outcome == 2){
            message.channel.send('Without a doubt.')
            return;
        }
        if(outcome == 3){
            message.channel.send('Yes – definitely.')
            return;
        }
        if(outcome == 4){
            message.channel.send('You may rely on it.')
            return;
        }
        if(outcome == 5){
            message.channel.send('As I see it, yes.')
            return;
        }
        if(outcome == 6){
            message.channel.send('Most likely.')
            return;
        }
        if(outcome == 7){
            message.channel.send('Outlook good.')
            return;
        }
        if(outcome == 8){
            message.channel.send('Yes.')
            return;
        }
        if(outcome == 9){
            message.channel.send('Signs point to yes.')
            return;
        }
        if(outcome == 10){
            message.channel.send('Reply hazy, try again.')
            return;
        }
        if(outcome == 11){
            message.channel.send('Ask again later.')
            return;
        }
        if(outcome == 12){
            message.channel.send('Better not tell you now.')
            return;
        }
        if(outcome == 13){
            message.channel.send('Cannot predict now.')
            return;
        }
        if(outcome == 14){
            message.channel.send('Concentrate and ask again.')
            return;
        }
        if(outcome == 15){
            message.channel.send('Don\'t count on it')
            return;
        }
        if(outcome == 16){
            message.channel.send('My reply is no.')
            return;
        }
        if(outcome == 17){
            message.channel.send('My sources say no.')
            return;
        }
        if(outcome == 18){
            message.channel.send('Outlook not so good.')
            return;
        }
        if(outcome == 19){
            message.channel.send('Very doubtful.')
            return;
        }   
    }
}