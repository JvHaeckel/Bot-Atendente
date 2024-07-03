const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});



// Respondendo
client.on('message_create', message => {
	if (message.body.toLocaleLowerCase === 'oi' || 'e ai' || 'boa noite' || 'boa tarde' || 'ola' || 'ei'   || 'tu' ) {
		
		client.sendMessage(message.from, 'Oi, sou o Brigs seu assistente, Bem vindo');
        client.sendMessage(message.from, 'Digite a opção desejada:');
        client.sendMessage(message.from, '1 - Brigadeiros');
        client.sendMessage(message.from, '2 - Salgados');
        // client.sendMessage(message.from, ''); Fazer ainda algo engraçado
	}
  
    if (message.body.toLocaleLowerCase ===  "1") {
        client.sendMessage(message.from, 'Digite a opção desejada:');
    }
   
});


client.initialize();