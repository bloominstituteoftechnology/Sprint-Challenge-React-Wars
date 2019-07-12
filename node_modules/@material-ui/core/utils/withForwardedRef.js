"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withForwardedRef;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _utils = require("@material-ui/utils");

/**
 * Enables ref forwarding on a given component that uses `innerRef` to forward refs
 * This is useful for component implementations that predate `forwardRef` and
 * used other props to forward refs.
 *
 * Instead of `<Component innerRef={ref} />` you can write
 * `<withForwardRef(Component) ref={ref} />`.
 *
 * This HOC does not handle prop collision. In
 * `<withForwardRef(Component) ref={ref} innerRef={innerRef} />` `innerRef` will be dropped
 *
 * Only copies statics from material-ui over.
 *
 * @param {React.ComponentType} Component
 * @returns {React.ForwardRefComponent}
 */
function withForwardedRef(Component) {
  var ForwardRefComponent = _react.default.forwardRef(function (props, ref) {
    return (// We expect this component to be wrapped in `withStyles` in which `innerRef`
      // is already intercepted and therefore won't appear in `props` here.
      _react.default.createElement(Component, (0, _extends2.default)({}, props, {
        innerRef: ref
      }))
    );
  });

  if (process.env.NODE_ENV !== 'production') {
    ForwardRefComponent.displayName = "ForwardRef(".concat((0, _utils.getDisplayName)(Component), ")");
  }

  return (0, _hoistNonReactStatics.default)(ForwardRefComponent, Component);
}