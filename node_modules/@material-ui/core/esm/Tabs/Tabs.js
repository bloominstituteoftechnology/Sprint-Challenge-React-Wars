import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import clsx from 'clsx';
import debounce from '../utils/debounce';
import ownerWindow from '../utils/ownerWindow';
import { getNormalizedScrollLeft, detectScrollType } from 'normalize-scroll-left';
import animate from '../internal/animate';
import ScrollbarSize from './ScrollbarSize';
import withStyles from '../styles/withStyles';
import TabIndicator from './TabIndicator';
import TabScrollButton from './TabScrollButton';
import useEventCallback from '../utils/useEventCallback';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: _defineProperty({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = React.forwardRef(function Tabs(props, ref) {
  var action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      theme = props.theme,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "theme", "value", "variant"]);

  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  process.env.NODE_ENV !== "production" ? warning(!centered || !scrollable, 'Material-UI: you can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.') : void 0;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      indicatorStyle = _React$useState4[0],
      setIndicatorStyle = _React$useState4[1];

  var _React$useState5 = React.useState({
    left: false,
    right: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      displayScroll = _React$useState6[0],
      setDisplayScroll = _React$useState6[1];

  var _React$useState7 = React.useState({
    overflow: 'hidden',
    marginBottom: null
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      scrollerStyle = _React$useState8[0],
      setScrollerStyle = _React$useState8[1];

  var valueToIndex = new Map();
  var tabsRef = React.useRef(null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabsNode.children[0].children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        process.env.NODE_ENV !== "production" ? warning(tab, ["Material-UI: the value provided `".concat(value, "` to the Tabs component is invalid."), 'None of the Tabs children have this value.', valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n')) : void 0;
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = useEventCallback(function () {
    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var left = 0;

    if (tabMeta && tabsMeta) {
      var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
      left = Math.round(tabMeta.left - tabsMeta.left + correction);
    }

    var newIndicatorStyle = {
      left: left,
      // May be wrong until the font is loaded.
      width: tabMeta ? Math.round(tabMeta.width) : 0
    };

    if ((newIndicatorStyle.left !== indicatorStyle.left || newIndicatorStyle.width !== indicatorStyle.width) && !isNaN(newIndicatorStyle.left) && !isNaN(newIndicatorStyle.width)) {
      setIndicatorStyle(newIndicatorStyle);
    }
  });

  var scroll = function scroll(scrollValue) {
    animate('scrollLeft', tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var multiplier = isRtl ? -1 : 1;
    var nextScrollLeft = tabsRef.current.scrollLeft + delta * multiplier; // Fix for Edge

    var invert = isRtl && detectScrollType() === 'reverse' ? -1 : 1;
    scroll(invert * nextScrollLeft);
  };

  var handleLeftScrollClick = function handleLeftScrollClick() {
    moveTabsScroll(-tabsRef.current.clientWidth);
  };

  var handleRightScrollClick = function handleRightScrollClick() {
    moveTabsScroll(tabsRef.current.clientWidth);
  };

  var handleScrollbarSizeChange = React.useCallback(function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? React.createElement(ScrollbarSize, {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.left || displayScroll.right;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonLeft = showScrollButtons ? React.createElement(ScrollButtonComponent, {
      direction: isRtl ? 'right' : 'left',
      onClick: handleLeftScrollClick,
      visible: displayScroll.left,
      className: clsx(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }) : null;
    conditionalElements.scrollButtonRight = showScrollButtons ? React.createElement(ScrollButtonComponent, {
      direction: isRtl ? 'left' : 'right',
      onClick: handleRightScrollClick,
      visible: displayScroll.right,
      className: clsx(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = useEventCallback(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta.left < tabsMeta.left) {
      // left side of button is out of view
      var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
      scroll(nextScrollLeft);
    } else if (tabMeta.right > tabsMeta.right) {
      // right side of button is out of view
      var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);

      scroll(_nextScrollLeft);
    }
  });
  var updateScrollButtonState = useEventCallback(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

      var showLeftScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      var showRightScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;

      if (showLeftScroll !== displayScroll.left || showRightScroll !== displayScroll.right) {
        setDisplayScroll({
          left: showLeftScroll,
          right: showRightScroll
        });
      }
    }
  });
  React.useEffect(function () {
    var handleResize = debounce(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = ownerWindow(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = React.useCallback(debounce(function () {
    updateScrollButtonState();
  }));
  React.useEffect(function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  React.useEffect(function () {
    setMounted(true);
  }, []);
  React.useEffect(function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  React.useEffect(function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  React.useImperativeHandle(action, function () {
    return {
      updateIndicator: updateIndicatorState
    };
  }, [updateIndicatorState]);
  var indicator = React.createElement(TabIndicator, _extends({
    className: classes.indicator,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: _extends({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = React.Children.map(childrenProp, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    process.env.NODE_ENV !== "production" ? warning(child.type !== React.Fragment, ["Material-UI: the Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : void 0;
    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React.cloneElement(child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });
  var conditionalElements = getConditionalElements();
  return React.createElement(Component, _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), React.createElement("div", {
    className: classes.flexContainer
  }, conditionalElements.scrollButtonLeft, conditionalElements.scrollbarSizeListener, React.createElement("div", {
    className: clsx(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    role: "tablist",
    onScroll: handleTabsScroll
  }, React.createElement("div", {
    className: clsx(classes.flexContainer, centered && !scrollable && classes.centered)
  }, children), mounted && indicator), conditionalElements.scrollButtonRight));
});
process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: PropTypes.bool,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

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
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: PropTypes.func,

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: PropTypes.elementType,

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: PropTypes.oneOf(['auto', 'desktop', 'on', 'off']),

  /**
   * Properties applied to the `TabIndicator` element.
   */
  TabIndicatorProps: PropTypes.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: PropTypes.any,

  /**
   *  Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth'])
} : void 0;
export default withStyles(styles, {
  name: 'MuiTabs',
  withTheme: true
})(Tabs);