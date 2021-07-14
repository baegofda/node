const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(cb) {
    this.emit("log", "started...");
    cb();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
