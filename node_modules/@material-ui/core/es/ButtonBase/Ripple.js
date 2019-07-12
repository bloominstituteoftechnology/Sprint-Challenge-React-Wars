import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  const {
    classes,
    className,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

  const [visible, setVisible] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);

  const handleEnter = () => {
    setVisible(true);
  };

  const handleExit = () => {
    setLeaving(true);
  };

  const rippleClassName = clsx(classes.ripple, className, visible && classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
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