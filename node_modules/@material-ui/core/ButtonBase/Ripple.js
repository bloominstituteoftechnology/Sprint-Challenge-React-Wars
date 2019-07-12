"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reactTransitionGroup = require("react-transition-group");

/**
 * @ignore - internal component.
 */
function Ripple(props) {
  var classes = props.classes,
      className = props.className,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      leaving = _React$useState4[0],
      setLeaving = _React$useState4[1];

  var handleEnter = function handleEnter() {
    setVisible(true);
  };

  var handleExit = function handleExit() {
    setLeaving(true);
  };

  var rippleClassName = (0, _clsx.default)(classes.ripple, className, visible && classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = (0, _clsx.default)(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  return _react.default.createElement(_reactTransitionGroup.Transition, (0, _extends2.default)({
    onEnter: handleEnter,
    onExit: handleExit
  }, other), _react.default.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, _react.default.createElement("span", {
    className: childClassName
  })));
}

process.env.NODE_ENV !== "production" ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: _propTypes.default.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: _propTypes.default.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: _propTypes.default.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: _propTypes.default.number
} : void 0;
var _default = Ripple;
exports.default = _default;