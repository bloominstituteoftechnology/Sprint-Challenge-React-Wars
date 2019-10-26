'use strict';


var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

var argNames = exports.argNames = function argNames(fn) {
  var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
    .match(ARGUMENT_NAMES);
  return (result || []);
};


var loadDeps = exports.loadDeps = function loadDeps(depList, services) {
  return depList.map(function(dep) {
    var service = services[dep];
    return service;
  });
};

var injectDeps = exports.injectDeps = function injectDeps(fn, services) {
  var mod, depList;
  if (Array.isArray(fn)) {
    mod = fn.pop();
    depList = fn;
  }
  else {
    mod = fn;
    depList = argNames(mod);
  }

  var deps = loadDeps(depList, services);

  return (function() {
    return fn.apply(null, deps);
  });
};
