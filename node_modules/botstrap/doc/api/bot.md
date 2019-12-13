# Class: Bot

The `Bot` is the centerpiece of the Botstrap framework - it is the class which represents the Slack chatbot. Essentially, the bot class is a wrapper around the official [Node Slack client](https://github.com/slackhq/node-slack-client), with some higher-level abstractions that allow for the definition of behaviour such as commands, and regex responses.

Create a bot instance using the factory method `createBot`, exposed by the Botstrap module.

## Bot.baseContext
the `baseContext` of every bot is a set of basic dependencies that every callback should be able to access. It includes the following objects:

* `bot`: The `Bot` itself.
* `client`: The lower-level WebSocket [Slack API client](https://github.com/slackhq/node-slack-client/blob/master/src/client.coffee) instance.
* `channels`: The channels in the Slack team.
* `dms`: The direct message channels visible to the bot.
* `groups`: The groups visible to the bot.
* `users`: The users in the Slack team.
* `bots`: The bot users in the Slack team.
* `services`: This is a dictionary containing the services registered in the bot. Normally it should not be necessary to directly invoke this dependency, since each of the services should also be exposed in the dependency injection interface.
* `logger`: A [Sequoria](https://github.com/elvinyung/sequoria) logger. This is included as a dependency mostly for the convenience of having a unified logging format throughout all of the decoupled bot bundles and plugins.

## Bot.on(event, cb)
The basic callback registration method. It adds `cb` as a listener to the specified `event`. 

The callbacks are dependency injected from a bucket of dependencies that include the bot's `baseContext`, its services, and some event-specific objects. 
