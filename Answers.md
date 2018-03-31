# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a javascript library that makes building webapps easier and efficient by separating components within an app and rendering their state as their inputs change. The components are reusable and can change the state of the objects rendered if the inputs change.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component lifecycle behaves in micro and macro patterns. A parent component takes in inputs which are passed to its `render()` method when the state of those inputs are changed. The `render()` method displays the inputs created by a user by mapping and passing the data inputs down to its children components. The constructor method,  functions and methods within those children are called and rendered, passing data down to their children and ultimately rendering in the parent’s component. The  `this.setState()` method is called and changes the current state of the objects provided. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component can pass props down to a child where as a functional/presentation component returns a JSX function that is exported to and rendered in the parent component, but does not render on its own

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are a way for us to make sure that the data passed from one component to another is a valid input. This is helpful for catching bugs