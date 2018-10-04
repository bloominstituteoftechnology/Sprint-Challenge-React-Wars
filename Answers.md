# Answers

1.  What is React JS and what problems does it try and solve?

React is a Javascript library that attempts to address problems such as the difficulty of working with the DOM API and the difficulty of developing complex multi-user applications on the web.

1.  What does it mean to _think_ in react?

Thinking in React means logically breaking down an application into smaller components and implementing them to achieve the desired result, allowing for very scalable and fast applications to be built from them.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component in React extends React.Component to the class, allowing it access to the methods located in it, and contains a state  object containing data that the application needs.

A functional component is a function used to return JSX to the application when called. Unlike class components, it does not contain any state data, instead relying on 'props' passed down to the component by the class component that calls the function.

1.  Describe state.
State refers to data held by the application on a class component. It is not intended to be directly manipulated, instead it relies on functions to update the state.


1.  Describe props.
Props (or properties) are data passed into functional components from a class component. Unlike state, props are not stored data, but rather arbitrary and variable arguments that are passed into the functional component to determine what is to be rendered.
