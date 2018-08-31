# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript library for building user-interfaces. The problem React tries to solve has to do with data that changes frequently on a website or app. React has the ability to update only the components that need to be updated without reloading the entire page. It does this with the virtual DOM, when there are any updates that need to be made to the page it does a diff on the previous DOM tree with the new one and updates only the nodes that have been changed.

2.  What does it mean to _think_ in react?

Thinking in React starts with breaking down the UI into a component hierarchy, next you can build a static version of the app by building components that reuse other components and pass data using props. Then, you can introduce state which would be some type of changing data such as search text that has been entered or the value of a checkbox. After that you need to figure out where your state should live, last you should add inverse data flow so the components deep in the hierarchy can update the state of the page.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful components have state and methods and are usually more dynamic and robust.  Functional components are basically javascript functions that take in props.

4.  Describe state.

State allows you to create components that are dynamic and interactive. State is used to keep track of information in between any renders that a components does.

5.  Describe props.

Props are passed into a component similar to passing an argument into a function.  They are a way for components to share data and they flow downwards from the parent component.
