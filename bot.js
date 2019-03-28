var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Conectado');
    logger.info('Logado como:: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			// !culpado
			case 'culpado':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'A culpa é do mouse teclado 100%'
				});
			break;
			// !cavaleiros
			case 'cavaleiros':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Cavaleiros da cachaça'
				});
			break;
			// !calaboca
			case 'calaboca':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Não da não!'
				});
			break;
			// !queralgo
			case 'queralgo':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Me da uma chupetona'
				});
			break;
			// !quermorrer
			case 'quermorrer':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'É lógico'
				});
			break;
			// !cheguei
			case 'cheguei':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Cheguei no momento certo... Momento de loot'
				});
			break;
			// !errou?
			case 'errou?':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Errei tudo'
				});
			break;
			// !balaleve
			case 'balaleve':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Eu to sem bala leve, mas o coisinho ta sem bala leve... Então estamos todos sem bala leve :)'
				});
			break;
			// !sekiro
			case 'sekiro':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Ele matou um peruuuu'
				});
			break;
			// !caustic
			case 'caustic':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'O segredo desse cara é jogar essa bosta por todo lado, porém isso não funciona se quem estiver jogando for o vaurus!'
				});
			break;
			// !loot
			case 'loot':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Loot? Que loot? Tinha nenhum shield dourado aqui não!'
				});
			break;
			// !hs45
			case 'hs45':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Então, head shot de 45 é 14 de dano mesmo?'
				});
			break;
			// !queisso
			case 'queisso':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: '30 anos de experiência como pathfinder'
				});
			break;
			// !merdeiroprofissa
			case 'merdeiroprofissa':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Sou mesmo uai'
				});
			break;
			// !cairdomapa
			case 'cairdomapa':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Meu nome é Vaurus, não é Leo não'
				});
			break;
			// !cai
			case 'cai':
				bot.voice
				bot.sendMessage({
					to: channelID,
					message: 'Cai porque sou primeiro a se fuder'
				});
			break;
            // Just add any case commands if you want to..
         }
     }
});