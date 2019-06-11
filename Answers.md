# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JavaScript language that helps create interactive UIs. You can build small reusable pieces of UI that can be easily put together to make a large scale application.

2.  What does it mean to _think_ in react?
React is component based. You build encapsulated compenents that manage their own state, then compose them to make complex UIs. Each component ideally should only do one thing.  Thinking in react basically means breaking down the app into components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
A class component requires you to extend from React.Component and create a render function which returns a React element. 

4.  Describe state.
In the React sense, “state” is an object that represents the pRarts of the app that can change. Each component can maintain its own state, which lives in an object called this.state.

5.  Describe props.
Props stand for properties. When we give a component some ‘attribute-looking’ data on our JSX, we’re essentially telling React to build us out an object that we can consume as a parameter inside of a Functional Component. Props are immutable (or Read only) meaning we cannot mutate props in any fashion. We simple receive them in our components and use them to display data to the user.