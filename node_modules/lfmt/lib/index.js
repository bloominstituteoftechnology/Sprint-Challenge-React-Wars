'use strict';


var stringify = exports.stringify = function stringify(value) {
  if (typeof value === 'undefined' || value === null) {
    return "";
  }

  var valueStr = value;
  if (typeof value !== 'string') {
    valueStr = value.toString && value.toString();
    (valueStr === '[object Object]') &&
      (valueStr = JSON.stringify(value));
  }
  return valueStr;
};

var getNested = exports.getNested = function getNested(key, obj) {
  var keyParts = key.split('.');
  return keyParts.reduce(function(acc, part) {
    if (typeof acc === 'undefined') {
      return;
    }

    return acc[part];
  }, obj);
};

var format = exports.format = function format(fmt, vars) {
  var templRegex = /\{{2}([^\}]*)\}{2}/g;
  var match;
  var result = fmt;
  while (match = templRegex.exec(fmt)) {
    var value = getNested(match[1], vars);
    result = result.replace(match[0], stringify(value));
  };
  return result;
};

var throwf = exports.throwf = function throwf(fmt, vars) {
  var exception = format(fmt, vars);
  throw exception;
};
