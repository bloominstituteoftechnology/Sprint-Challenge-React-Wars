#!/usr/bin/env node

var path = require('path'),
  program = require('commander'),
  fs = require('fs'),
  sequoria = require('sequoria'),
  createBot = require('../lib').createBot;

function main() {
  program
    .version(require('../package').version)
    .usage('[configFile]')
    .action(function(configFile){
      // this module is being directly run.
      var configFile = path.resolve(configFile || 'config.json');
      var config = JSON.parse(fs.readFileSync(configFile));
      var bot = createBot(config);
      bot.start();
    })
    .parse(process.argv);
}

if (require.main === module) {
  main();
}

module.exports = createBot;
