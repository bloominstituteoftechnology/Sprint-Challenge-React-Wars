import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import FormControlContext from './FormControlContext';
import { getDisplayName } from '@material-ui/utils';
export default function withFormControlContext(Component) {
  var EnhancedComponent = React.forwardRef(function (props, ref) {
    return React.createElement(FormControlContext.Consumer, null, function (context) {
      return React.createElement(Component, _extends({
        muiFormControl: context,
        ref: ref
      }, props));
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    EnhancedComponent.displayName = "WithFormControlContext(".concat(getDisplayName(Component), ")");
  }

  hoistNonReactStatics(EnhancedComponent, Component);
  return EnhancedComponent;
}