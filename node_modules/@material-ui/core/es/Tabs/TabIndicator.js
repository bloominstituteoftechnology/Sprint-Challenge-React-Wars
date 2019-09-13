import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export const styles = theme => ({
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
});
/**
 * @ignore - internal component.
 */

const TabIndicator = React.forwardRef(function TabIndicator(props, ref) {
  const {
    classes,
    className,
    color
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "color"]);

  return React.createElement("span", _extends({
    className: clsx(classes.root, classes[`color${capitalize(color)}`], className),
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