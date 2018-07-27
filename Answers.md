# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JavaScript library and it's purpose is to solve the problem of 'expensive' DOM operations.  As websites that have many DOM operations tend to render slowly.  However React reduces DOM operations via its virtual DOM improving the performance of websites.

1.  What does it mean to _think_ in react?
    Thinking in React involves breaking down the UI into a component heirarchy, building a static version in React, identify minimal representation of UI state, identify where state should live and add inverse data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class/stateful components have a state object where variables can be stored and changed via this.setState also have a render method.  Functional components are only for the view and don't have a way to manage state.

1.  Describe state.
    State is an object that determines how a component renders and behaves.
1.  Describe props.
    Creation parameter for components.