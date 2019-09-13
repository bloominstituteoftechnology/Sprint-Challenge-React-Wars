import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react'; // This variable will be true once the server-side hydration is completed.

var hydrationCompleted = false;

function deepEqual(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var multiple = Array.isArray(queryInput);
  var queries = multiple ? queryInput : [queryInput];
  queries = queries.map(function (query) {
    return query.replace('@media ', '');
  }); // Wait for JSDOM to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  var _options$defaultMatch = options.defaultMatches,
      defaultMatches = _options$defaultMatch === void 0 ? false : _options$defaultMatch,
      _options$noSsr = options.noSsr,
      noSsr = _options$noSsr === void 0 ? false : _options$noSsr,
      _options$ssrMatchMedi = options.ssrMatchMedia,
      ssrMatchMedia = _options$ssrMatchMedi === void 0 ? null : _options$ssrMatchMedi;

  var _React$useState = React.useState(function () {
    if ((hydrationCompleted || noSsr) && supportMatchMedia) {
      return queries.map(function (query) {
        return window.matchMedia(query).matches;
      });
    }

    if (ssrMatchMedia) {
      return queries.map(function (query) {
        return ssrMatchMedia(query).matches;
      });
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return queries.map(function () {
      return defaultMatches;
    });
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      matches = _React$useState2[0],
      setMatches = _React$useState2[1];

  React.useEffect(function () {
    hydrationCompleted = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryLists = queries.map(function (query) {
      return window.matchMedia(query);
    });
    setMatches(function (prev) {
      var next = queryLists.map(function (queryList) {
        return queryList.matches;
      });
      return deepEqual(prev, next) ? prev : next;
    });

    function handleMatchesChange() {
      setMatches(queryLists.map(function (queryList) {
        return queryList.matches;
      }));
    }

    queryLists.forEach(function (queryList) {
      queryList.addListener(handleMatchesChange);
    });
    return function () {
      queryLists.forEach(function (queryList) {
        queryList.removeListener(handleMatchesChange);
      });
    };
  }, queries); // eslint-disable-line react-hooks/exhaustive-deps

  return multiple ? matches : matches[0];
}

export function testReset() {
  hydrationCompleted = false;
}
export default useMediaQuery;