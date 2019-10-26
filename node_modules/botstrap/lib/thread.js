'use strict';

let InjectingEventEmitter = require('./event').InjectingEventEmitter;
let RTM_EVENTS = require('@slack/client').RTM_EVENTS;
let OutgoingMessage = require('./message').OutgoingMessage;

/*

As with `Message`, no need to manually instantiate `Thread`s.
*/
class Thread extends InjectingEventEmitter {
  constructor(bot, channel, ts) {
    super(bot);
    this.channel = channel;
    this.ts = ts;
    this.history = [];
    this.sent = true;

    this.bot.on(RTM_EVENTS.MESSAGE, (message) => {
      if (message.thread != this) {
        return;
      }

      this.push(message);
      this.emit(RTM_EVENTS.MESSAGE, {
        message: message
      });
    });
  }

  push(msg) {
    this.history.push(msg);
  }

  send(msg, cb) {
    let sentMessage = new OutgoingMessage(this.bot, this.channel);
    sentMessage.setThread(this);
    sentMessage.end(msg, () => {
      this.push(sentMessage);
      this.channel.addThread(this);
    });
    return sentMessage;
  }
}
exports.Thread = Thread;
