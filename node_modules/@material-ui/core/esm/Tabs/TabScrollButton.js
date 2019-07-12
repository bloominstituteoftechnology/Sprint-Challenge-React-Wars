import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import KeyboardArrowLeft from '../internal/svg-icons/KeyboardArrowLeft';
import KeyboardArrowRight from '../internal/svg-icons/KeyboardArrowRight';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    color: 'inherit',
    width: 40,
    flexShrink: 0
  }
};
/**
 * @ignore - internal component.
 */

var _ref = React.createElement(KeyboardArrowLeft, {
  fontSize: "small"
});

var _ref2 = React.createElement(KeyboardArrowRight, {
  fontSize: "small"
});

var TabScrollButton = React.forwardRef(function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      onClick = props.onClick,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      other = _objectWithoutProperties(props, ["classes", "className", "direction", "onClick", "visible"]);

  var className = clsx(classes.root, classNameProp);

  if (!visible) {
    return React.createElement("div", {
      className: className
    });
  }

  return React.createElement(ButtonBase, _extends({
    component: "div",
    className: className,
    onClick: onClick,
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
process.env.NODE_ENV !== "production" ? TabScrollButton.propTypes = {
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
   * Which direction should the button indicate?
   */
  direction: PropTypes.oneOf(['left', 'right']),

  /**
   * Callback to execute for button press.
   */
  onClick: PropTypes.func,

  /**
   * Should the button be present or just consume space.
   */
  visible: PropTypes.bool
} : void 0;
export default withStyles(styles, {
  name: 'PrivateTabScrollButton'
})(TabScrollButton);