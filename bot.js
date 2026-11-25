const mineflayer = require('mineflayer');

function start() {
  const bot = mineflayer.createBot({
    host: 'SMRecords.aternos.me',
    port: 13028,
    username: 'ProyectoBot',
    auth: 'offline'
  });

  bot.once('spawn', () => {
    console.log('Bot conectado');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 300);
      bot.look(Math.random() * Math.PI * 2, 0);
    }, 30000);
  });

  bot.on('end', () => setTimeout(start, 10000));
  bot.on('error', e => console.log('Error:', e.message));
  bot.on('kicked', r => console.log('Expulsado:', r));
}
start();
