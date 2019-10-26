var inject = require('../../lib').injectDeps;



var modules = {};

modules.cache = {
  get: function get(key) {
    this.store = this.store || {};
    return this.store[key];
  },
  set: function set(key, value) {
    this.store = this.store || {};
    this.store[key] = value;
  }
};

modules.math = {
  add: function add(a, b) {
    return a + b;
  }
};


var main = inject(['cache', 'math', function(cache, math) {
  cache.set('a', 1);
  cache.set('b', 2);
  cache.set('c', math.add(cache.get('a'), cache.get('b')));
  console.log(cache.get('c'));
}], modules)();
