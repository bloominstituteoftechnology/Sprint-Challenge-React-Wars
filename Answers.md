# Answers

1.  What is React JS and what problems does it try and solve?

React.js is a UI component library designed by the facebook team. React cuts down on load time for pages that require multiple instances of DOM manipulation. React also allows for the creation of reusable UI components.

2.  What does it mean to _think_ in react?

Thinking in react means looking at an app and breaking it down into component parts. What parts of the app need to be reactive, what information needs to be stored and where, and what parts are static.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful components have state and are built with class syntax. This is where the reactivity lives. Functional/Presentational components feed into the Class/Stateful components and pull data from state and methods.

1.  Describe state.
state is an object that contains all of the reactive elements of an app. It should only be changed with the setState method.

1.  Describe props.

props refer to the properties of a component. props.something syntax is used in Functional/Presentational components as a placeholder for information that will be taken from their parent Class/Stateful component.