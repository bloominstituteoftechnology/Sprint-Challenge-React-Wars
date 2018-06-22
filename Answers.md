# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript UI library that allows users to efficiently build and arrange encapsulated components.  Allows for use of rich data without making the state clog the DOM.  Proven to be useful for giant, interactive platforms that receive a ton of interactive user traffic daily.

1.  What does it mean to _think_ in react?

    It means procedurally constructing an app from hierarchical components, starting with the framework then adding and passing content as necessary.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are simpler and less dynamic in terms of functionality.  They don't have state, but can access props and are used to build out the UI.  They should be used whenever possible as they are simpler and easier to read compared to Class components.
Class components can have life cycle methods and use the 'this' keyword to access props.  They extend from React.Component and can receive and process different user inputs.

1.  Describe state.

State holds information about a component and is created and usable only within said component.  It is malleable and will change according to whatever data it receives through callback functions.

1.  Describe props.

Props are properties passed into a component similar to how an argument is passed to a function. Props can also be set as a default value, but should not be mutable after they are set.