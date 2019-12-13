var botstrap = require('../../lib');

var bot = botstrap.createBot({
  token:
});

// responds to any message beginning with !reverse or !esrever
bot.command(['reverse', 'esrever'], function reverse(argv, response) {
  response.end(argv.reverse().join(' '));
});

// responds to any message beginning with !random
bot.command('random', function random(response) {
  response.write(Math.random());
});

// responds to any message
bot.onMessage(function(message, response) {
  if (message.text === 'ping') {
    response.write('pong');
  }
});

bot.start();
