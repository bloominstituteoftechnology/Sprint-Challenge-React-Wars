"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _styles = require("@material-ui/styles");

var _useMediaQuery = _interopRequireDefault(require("./useMediaQuery"));

function useMediaQueryTheme(query, options) {
  var theme = (0, _styles.useTheme)();
  var props = (0, _styles.getThemeProps)({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });
  return (0, _useMediaQuery.default)(query, (0, _extends2.default)({}, props, options));
}

var _default = useMediaQueryTheme;
exports.default = _default;