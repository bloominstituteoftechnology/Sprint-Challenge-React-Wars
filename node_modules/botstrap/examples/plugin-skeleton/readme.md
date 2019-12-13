# Simple Plugin Skeleton

Annotated example of a Botstrap plugin, a command that reacts 👍 to the request message, responds "OK", and reacts 👌 to the response message. 

### Files
#### Core
* `index.js` is the entry point of the plugin. The convention is to export the module such that Botstrap can directly `require()` the plugin module to register it with the bot.
* `plugin.json` is the "manifest" of the plugin. It contains a bunch of metadata about it.

#### Other stuff
* `test.js` contains the Mocha unit tests for the plugin, and demonstrates unit testing Botstrap plugins by injecting mocked dependencies.
* `config.json` is an example testing config. It's common to test your plugin on Slack by running it as a separate bot, and the barebones test bot config allows developers to livetest the plugin simply by running the command `botstrap`.
