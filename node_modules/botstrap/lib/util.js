
// variadic iterable aggregator, similar to Python's zip().
exports.zip = function zip() {
  if (arguments.length <= 0) return [];

  // argument array sorted by length.
  var args = Array.apply(null, arguments)
    .filter(Array.isArray)
    .map(function(arr) {
      // shallow copy each array for immutation.
      return arr.slice();
    });

  // result should be a 2d array of zipped aggregates.
  return args.slice()
    .sort(function(a, b) {
      return a.length - b.length;
    })[0]
    .slice()  // copy array again for immutation
    .map(function() {
      return args.map(function(arr) {
        return arr.shift();
      });
    });
};

exports.merge = function merge(a, b) {
  var merged = {};

  Object.keys(a || {}).forEach(function(key) {
    merged[key] = a[key];
  });

  Object.keys(b || {}).forEach(function(key) {
    merged[key] = b[key];
  });

  return merged;
};

exports.sample = function sample(arr) {
  return arr[Math.floor(arr.length * Math.random())];
};
