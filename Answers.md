# Answers

1.  What is React JS and what problems does it try and solve? React JS is a library that lets developers use a virtual DOM to update only those parts of their code that are being changed, as opposed to changing/relaoding every component any time one thing is changed. This means that an app with a lot of moving pieces can be dynamic with its content, updating pieces as needed and leaving the rest alone.

2.  What does it mean to _think_ in react? Thinking in react means breaking down your app into components or smaller pieces and building those pieces together into a functioning whole. You're trying to determine what pieces of your app can receive changes and how to access just that part of your app.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. A Functional component is just a JavaScript function. They take in props. Class components can have a state, and that state can be updated based on what gets passed in.

4.  Describe state. State is an object that belongs to the component where it is declared, and can be updated whenever necessary.

5.  Describe props. Props (properties) are immutable data that gets passed around for users to interact with. A component will render out any props that are passed to it.
