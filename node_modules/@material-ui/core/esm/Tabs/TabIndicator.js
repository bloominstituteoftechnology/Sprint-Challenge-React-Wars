import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = React.forwardRef(function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = _objectWithoutProperties(props, ["classes", "className", "color"]);

  return React.createElement("span", _extends({
    className: clsx(classes.root, classes["color".concat(capitalize(color))], className),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: PropTypes.oneOf(['primary', 'secondary'])
} : void 0;
export default withStyles(styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator);