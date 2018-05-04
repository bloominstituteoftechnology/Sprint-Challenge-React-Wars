# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
-React.js is a javascript library that allows us to break our elements into componenets, and have more control over the state and rendering of elements on the page


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
- ComponenetDidMount is the lifecycle that kicsk off when a component is mounted onto the page.

- ComponentWillReceiveProps is called when a component recieves new props.

- ShouldComponentUpdate is a function that returns a boolean when it is called. It is called whenever a render method is called.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Functional componenet lack state, and are only there to present prop data. Class Componenets use state, and can be used to change and modify data by manipulating data.

4. Briefly describe PropTypes and what we use them for when building react applications.
 
 - PropTypes allow us to control the data types that props are in, and can be used to future proof against potential bugs in the future.