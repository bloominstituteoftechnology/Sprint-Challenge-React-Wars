# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a javascript library that makes it easier to build web applications with changing data. It's smart enough to know when our data has changed and will only render that part of the application again instead of re rendering the whole page which has performance drawbacks. In class we learned that we can modularize our componments.

1.  What does it mean to _think_ in react?

To think in React means to take a high level look at the application you are trying to build and thinking about the data flow and the seperate pieces of the app that you can split into different components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

1.  Describe state.

State is the current state of the react component. It is managed and can only be used on a class component. State can be changed using the 'setState' method. When the components state changes it re renders the component to reflect the new state.


1.  Describe props.

Props are a powerfull tool that lets us pass data and methods from a parent component to a child component. We pass props by setting a key variable on the parent component with the value set to whatever we want to give the child component access to. Props cannot be passed from child to parent directly. Both class and functional componets in React can utilize props.