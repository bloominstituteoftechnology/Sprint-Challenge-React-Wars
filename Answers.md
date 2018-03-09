# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a a Javascript library used for the creation of web user interfaces via manipulation of the DOM. It displays dynamic and interactive data via reusable 'components', and utilizes server-side-rendering of such interfaces, essentially compartmentalizing a solution to the View, in the standard Model View Controller (MVC) paradigm. React JS differs from other JS frameworks in that it is a library and not a full framework, such as Angular.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component lifecycle consists of Mounting, Updating, and Unmounting. Mounting methods are when the components are being created and inserted into the DOM, such as constructor(), render() and componentWillMount(). Updating methods are brought about by changes to the props or state and occur when a component is to be re-rendered, such as componentWillUpdate() and componentWillReceiveProps(). The Unmounting method componentWillUnmount() will come into play when a component is removed from the DOM.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components within React are essentially 'functional' in that they simply render or present the data. Additionally, they do not have a state although they can access props. They are the UI of the App, and not the behavior and they can not use lifecycle methods. Unlike this, Class or Stateful components are the behavior of the App in that they make use of the lifecycle methods and are written with ES6 class syntax.

4. Briefly describe PropTypes and what we use them for when building react applications.

React proptypes checks the runtime and validates the data of props and objects within React. It essentially ensures the correct and expected props are passed to their intended components. 
