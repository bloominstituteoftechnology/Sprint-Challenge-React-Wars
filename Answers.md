# Answers

1. What is React JS and what problems does it try and solve?

ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.
eact solves the problem of providing a smooth experience for millition of users who interact simultaneously, as well as those who develope applications.

2. What does it mean to think in react?

-Break The UI Into A Component Hierarchy
-Build A Static Version in React
-Identify The Minimal (but complete) Representation Of UI State
-Identify Where Your State Should Live
-Add Inverse Data Flow

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are basically just the render function of a class component. You can access props, but they can’t have state. You also can’t use life cycle methods with functional components. Instead, they focus solely on the UI and not on the behavior of the app.

Class components extend from React.Component, and you have to use the this keyword to access props (and also other functions you declare inside the component).

4. Describe state.


State is similar to props, but it is private and fully controlled by the component.


5. Describe props.

Props are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.
