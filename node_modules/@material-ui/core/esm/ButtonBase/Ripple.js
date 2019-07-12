import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
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
      other = _objectWithoutProperties(props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      leaving = _React$useState4[0],
      setLeaving = _React$useState4[1];

  var handleEnter = function handleEnter() {
    setVisible(true);
  };

  var handleExit = function handleExit() {
    setLeaving(true);
  };

  var rippleClassName = clsx(classes.ripple, className, visible && classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  return React.createElement(Transition, _extends({
    onEnter: handleEnter,
    onExit: handleExit
  }, other), React.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, React.createElement("span", {
    className: childClassName
  })));
}

process.env.NODE_ENV !== "production" ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number
} : void 0;
export default Ripple;