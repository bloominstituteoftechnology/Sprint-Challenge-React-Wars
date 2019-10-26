
var lfmt = require('lfmt');

var exports = module.exports = {};


var logFmtTimeNow = function logFmtTimeNow() {
  return lfmt.format('[{{now}}]', {
    now: new Date()
  });
};


var logTypes = exports.logTypes = {
  LOG: 'LOG',
  ERROR: 'ERROR',
  WARN: 'WARN'
};
var logFns = {};
logFns[logTypes.LOG] = console.log;
logFns[logTypes.ERROR] = console.error;
logFns[logTypes.WARN] = console.error;


var _log = function _log(type, args) {
  // if there's no logFn for the given type, error
  if (!logFns[type]) {
    throw new Error('Invalid log type!');
  }

  // build log prefix from type arg
  var logPrefix = lfmt.format('{{type}}:', {
    type: type
  });

  // build log message body from arguments of log/err fn calls
  var body = [logPrefix]
    .concat(Array.apply(null, args))
    .map(lfmt.stringify)
    .join(' ');

  // get logFn of type
  logFn = logFns[type];

  logFn(logFmtTimeNow(), body);
};


var addLogType = exports.addLogType = function addLogType(name, logFn) {
  logFns[name] = logFn;
  logTypes[name] = name;
};


var log = exports.log = function log() {
  _log(logTypes.LOG, arguments);
};


var error = exports.err = exports.error = function error() {
  _log(logTypes.ERROR, arguments);
};

var warn = exports.warn = function warn() {
  _log(logTypes.WARN, arguments);
};

var logCustom = exports.logCustom = function logCustom() {
  var args = Array.apply(null, arguments);
  var type = args.shift();
  if (!logTypes[type]) {
    throw new Error('No such logType!');
  }
  _log(type, args);
};
