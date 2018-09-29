# Answers

1.  What is React JS and what problems does it try and solve?

Manipulating the DOM can be repetitive, requires writing a lot of code and makes the process error prone, especially when the application gets larger and requires a lot of state changes. ReactJS, by giving us the virtual DOM (instead of the actual DOM), allow us to build User Interface components in a simpler way. 

1.  What does it mean to _think_ in react?

To think in react mean to think about building the application in "components" that are reusable and concerned with doing one function really well (single responsibility). Thinking in react, a developer thinks about the User Interface in terms of a component hierarchy and what component should have state (dynamic data - user input) or simply render objects onto the DOM.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component does not have state - meaning it is static, it will not change with user interaction or input. A functional component is simply for displaying parts of the User Interface that is unchanging. A Class component, on the other hand, does have state and can pass state through props to child components. A class component is an extension of the React component, which gives it much more functionality than a normal functional component. 

1.  Describe state.

State is dynamic data. 

1.  Describe props.

Props are object properties. They get passed from one componenet to another in a flow of parent to child. In an application, the state may live on the App.js component and that data gets passed down to other components via props. 
