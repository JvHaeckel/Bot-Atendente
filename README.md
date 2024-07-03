# Bot-Atendente

1 - Verificar se a suas versões do Node e   estão corretas: 

2 - Ir no site: https://wwebjs.dev/guide/installation.html#create-your-project-folder e colocar os seguintes comandos no terminal do VS Code:

npm install whatsapp-web.js
npm install qrcode-terminal   Gerar QR Code

Depois copiar e colar esse código: 
And now we'll modify our code to use this new module:


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


