import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import warning from 'warning';
import Typography from '../Typography';
import withStyles from '../styles/withStyles';
import withFormControlContext from '../FormControl/withFormControlContext';
import FormControlContext from '../FormControl/FormControlContext';
export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  }
};
const InputAdornment = React.forwardRef(function InputAdornment(props, ref) {
  const {
    children,
    component: Component = 'div',
    classes,
    className,
    disablePointerEvents = false,
    disableTypography = false,
    muiFormControl,
    position,
    variant: variantProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "component", "classes", "className", "disablePointerEvents", "disableTypography", "muiFormControl", "position", "variant"]);

  let variant = variantProp;

  if (variantProp && muiFormControl) {
    process.env.NODE_ENV !== "production" ? warning(variantProp !== muiFormControl.variant, 'Material-UI: The `InputAdornment` variant infers the variant property ' + 'you do not have to provide one.') : void 0;
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return React.createElement(FormControlContext.Provider, {
    value: null
  }, React.createElement(Component, _extends({
    className: clsx(classes.root, className, variant === 'filled' && classes.filled, position === 'start' && classes.positionStart, position === 'end' && classes.positionEnd, disablePointerEvents && classes.disablePointerEvents),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? React.createElement(Typography, {
    color: "textSecondary"
  }, children) : children));
});
process.env.NODE_ENV !== "production" ? InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: PropTypes.node.isRequired,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: PropTypes.bool,

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['start', 'end']),

  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
} : void 0;
export default withStyles(styles, {
  name: 'MuiInputAdornment'
})(withFormControlContext(InputAdornment));