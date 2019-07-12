import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { exactProp } from '@material-ui/utils';
import { useForkRef } from '../utils/reactHelpers';

function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return ReactDOM.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = React.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mountNode = _React$useState2[0],
      setMountNode = _React$useState2[1];

  var childRef = React.useRef(null);
  var handleRef = useForkRef(children.ref, childRef);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  React.useImperativeHandle(ref, function () {
    return mountNode || childRef.current;
  }, [mountNode]);
  useEnhancedEffect(function () {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [mountNode, onRendered]);

  if (disablePortal) {
    React.Children.only(children);
    return React.cloneElement(children, {
      ref: handleRef
    });
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});
process.env.NODE_ENV !== "production" ? Portal.propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: PropTypes.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: PropTypes.func
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = exactProp(Portal.propTypes);
}

export default Portal;