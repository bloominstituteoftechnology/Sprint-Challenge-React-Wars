'use strict';

// HERE BE DRAGONS.
// I'm patching node-slack-sdk's `BaseChannel` because I can't find a nice way
// to subclass it (yet).

let OutgoingMessage = require('./message').OutgoingMessage;
let Thread = require('./thread').Thread;

let channels = {};

class Channel {
  constructor(id) {
    this.id = id;
    this.threads = {};
  }

  send(msg, cb) {
    let sentMessage = new OutgoingMessage(this.bot, this);
    sentMessage.end(msg);
    return sentMessage;
  }

  addThread(ts, thread) {
    if (ts.__proto__ === Thread.prototype) {
      thread = ts;
      ts = thread.ts;
    }

    this.threads[ts] = thread;
  }

  getThread(ts) {
    return this.threads[ts];
  }
}

Channel.getById = (id) => {
  if (!channels[id]) {
    channels[id] = new Channel(id);
  }

  return channels[id];
}

exports.Channel = Channel;
