'use strict';

let EventEmitter = require('events');

/*
The InjectingEventEmitter (I sound like I'm writing J2EE) is a thin wrapper
around the node EventEmitter that lets us do dependency-injected callbacks on
events.

TODO: make Bot an InjectingEventEmitter
*/

class InjectingEventEmitter extends EventEmitter {
  constructor(bot) {
    super();
    this.bot = bot;
  }

  on(eventName, listener) {
    // by convention, we emit events with 1 arg for the extended context
    super.on(eventName, (context) => this.bot.injectedInvoke(listener,
      context));
  }
}

exports.InjectingEventEmitter = InjectingEventEmitter;
