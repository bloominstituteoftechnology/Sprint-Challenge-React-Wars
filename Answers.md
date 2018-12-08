# Answers

1.  What is React JS and what problems does it try and solve?

React JS attempts to make it painless to create User Interfaces in Javascript.

2.  What does it mean to _think_ in react?

Thinking in React means that everything is a component, and to break larger components down into smaller ones so that each component is responsible for only what is related to it.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class component will have a constructor() function (where state will be stored).  Functional components (when written in ES6) do not require 'this' to be binded, as the binding is implicit.

4.  Describe state.

"State" is the data that defines the current status of the application.

5.  Describe props.

Props are arguments for components passed through JSX as attributes, and can be named (with certain exceptions) anything the programmer desires.  One important exception is the className prop, which stands in for the 'class' attribute that would be used in HTML, because 'class is a keyword in JavaScript.
