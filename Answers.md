# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript library that attempts to solve the complicated process of building a large scale web application. This is accomplished with components and the virtual DOM.

2.  What does it mean to _think_ in react?

It means to build based upon the flow of data. In react, this flow is top-down from a parent component to a child component. Any updates to the data causes React to compare the actual and virtual DOM, and then re-render the affected component based on the differential.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Classical components have access to lifecycle hooks, state, and the this keyword. These container components pass the state object as props to presentational components. Functional components are pure functions and are therefore easy to test, easier to read and understand, and encourage best practices.

4.  Describe state.

An object that stores data.

5.  Describe props.

An object that is consumed as a parameter inside a Functional Component that cannot be mutated.
