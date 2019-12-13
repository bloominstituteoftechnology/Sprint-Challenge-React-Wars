'use strict';

// This is the entry point of the command.
// Botstrap's dependency injection will automatically pass arguments
// when calling this, by matching the parameter names to objects in the
// event-specific context.
var cmd = function(message, response) {
  // React to the message
  message.react('+1');

  // Send a response
  response.end('OK');

  // Responses are messages too!
  response.react('ok_hand');
};

// Botstrap calls the `setup` method if the plugin has one.
cmd.setup = function(bot) {
  // This adds a `!dosomehing` command to the bot.
  bot.command('dosomething', cmd);
};

// Convention for supplying metadata with the plugin.
cmd.metadata = require('./plugin');

// The entry point is exposed directly so that it can be
// simply require()d when integrating it.
module.exports = cmd;
