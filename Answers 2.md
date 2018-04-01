[X] ## Start by forking and cloning this repository.
## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
React JS is a framework created by Facebook engineers that is optimized for single page applications (like Facebook).  It features a virtual DOM and simplifies writing HTML by using a language called JSX.  JSX looks very close to Javascript but is not.  However, JSX allows developers to generate HTML dynamically at runtime by using a familiar syntax.

React is component-based (i.e. modular) in that components can encapsulate both logic and data.  In React's syntax data is referred to as 'state'.  States are contained within the component itself to avoid binding issues with 'this'.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
A function component acts on a single element.  A class component can act on a collection of data (states?).  Class components have a 'lifecycle' spanning their entire existence ('cradle to grave'?).  The lifecycle methods are:  willMount, didMount, willReceiveProps, shouldUpdate, willUpdate, render, didUpdate, willUnmount.

willMount -- is the default state.  Nothing has happened, the component has not been rendered but will be soon.

didMount -- the component has rendered and is ready to be used.  This is where the components state (data) is loaded.  This is where the component is modified, for example adding event listeners.  This is where all the setup is done that requires DOM.

shouldUpdate -- is a 'confidence check' where the component asks permission to update.  If no props that the user cares about has changed then permission is denied.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
A Class/Stateful component can be defined using an ES6 class.  Class components have more features than function components.  These additional features include the use of state.  State is a collection of data.  This collection is private to and fully controlled by the component.  In the component definition state should be placed before the 'render()' statement.

A Functional/Presentational component is created by writing a JavaScript function.  They are literally JS functions.  Functional/Presentation components accept a single property object argument (called a 'props', excuse the grammar) and return a React element.

