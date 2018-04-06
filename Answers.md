# Answers

1. What is React JS? What types of problems does it solve?
    React JS is a Javascript framework/library that lets you use and reuse components with javascript logic through a Virtual DOM without the need to reload the page and saving resources, allowing to show content dynamically.

2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.
    Every component has it's lifecycle, with different events going on through it. There are some methods that are part of the lifecycle:
        componentWillMount: it will be executed before the render method.
        componentDidMount: it will be  executed after the initial rendering.
        componentWillReceiveProps: it will be executed when the component receive new props.
        shouldComponentUpdate: it will be executed before rendering and after receiving new props or states. you could return false to stop it from rerendering.
        componentWillUpdate: It will be executed before rendering and after receiving new props os states.
        componentDidUpdate: It will be executed after rerendering the component and the DOM has been updated.
        componentWillUnmount: It will be executed and immediately remove component from the DOM.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    The biggest differences between the Class and Stateful component is the use of ES6 for the Stateful cmponent, affecting the way "this" is used, as well as the syntax. The "getInitialState" is no longer working in a state and is all done by the "constructor" property, also in stateful component, the "getDefaultProps" of class component is an object property called "defaultProps" and "Mixins" are no longer supported on stateful components.

    A functional component is a component presented most commonly as a javascript function and it doesn't have lifecycle methods. A presentational component is one that most probably contain a render method, no dependencies, use of props, and are concerned on how the code looks for easier readability.

4. Briefly describe PropTypes and what we use them for when building react applications.
    Proptypes are properties made for typechecking and used mostly to catch bugs as the app grows bigger. It ensures the data received is valid.