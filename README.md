# Bot-Atendente

1 - Verificar se a suas versões do Node e   estão corretas: 

2 - Ir no site: https://wwebjs.dev/guide/installation.html#create-your-project-folder e colocar os seguintes comandos no terminal do VS Code:

npm install whatsapp-web.js
<br>
npm install qrcode-terminal                   Gerar QR Code


<br>
Depois copiar e colar esse código: 

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();
client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.initialize();


<br>
Depois copiar e colar esse código: Replying to messages
client.on('message_create', message => {
	if (message.body === '!ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
});



