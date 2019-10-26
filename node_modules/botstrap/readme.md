# Botstrap
### by [Elvin Yung](https://github.com/elvinyung)
## Slack-bot framework

**Botstrap** is a lightweight, extensible Slack bot framework built on top of the official Slack JavaScript client. It aims to combine and abstract Slack's RTM and Web APIs in a conceptually intuitive way, and expose a simple but powerful platform for building functionality.

### Core Concepts
* **Plugin architecture:** At Botstrap's core is a plugin architecture that aims to be simple but powerful, with the main goal being to minimize development time for "actual" functionality. It exposes a dependency injection API for callbacks to reduce boilerplate.
* **"Object-oriented" API:** Slack's RTM and Web APIs are generally pretty procedural, requiring specific knowledge of different methods. Botstrap aims to provide a more intuitive layer of abstraction, exposing the same functionality as methods on objects (e.g. *Message* or *Channel*).

### Getting Started
#### Installation
With Node.js installed, install `botstrap` from NPM:

```
npm install -g botstrap
```

#### Bot Development
You can build a Botstrap bot by writing a script that invokes the Botstrap APIs ([example](https://github.com/elvinyung/botstrap/blob/master/examples/quickstart/bot.js)), which can be run as just a plain old Node.js script.

Alternatively, you can create a bot by writing a "manifest" JSON file containing some basic information about the bot and its behavior ([example](https://github.com/elvinyung/botstrap/blob/master/examples/json/config.example.json)). You can then run it using the command `botstrap [config filename]`.

#### Plugin Development
Botstrap implements a simple plugin architecture. It aims to be as "unmagical" as reasonably possible, making it easy to for someone who is already familiar with Node.js development to build functionality on top of Botstrap.

The main piece of magic to learn about is the dependency injection API. Basically, instead of manually getting the data that you need, all you need to do is name them in your callback arguments.

See [an example plugin](examples/plugin-skeleton).
