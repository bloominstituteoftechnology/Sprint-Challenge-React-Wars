# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is component based, so you can build each component differently, to handle its own data (if necessary).

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Lifecycle components are methods that are invoked at different points of the render process.  

`componenetWillMount()` -- Invoked before the component is first rendered on screen
`componenetDidMount()` -- Invoked after the componenet is first rendered on screen
`componentWillUpdate()` -- Invoked before the componenet is updated on the screen, but after it already exists.
`componenetDidUpdate()` -- Invoked after the component is updated on the screen.

each of these will be invoked (if included in your code.  All are optional to be used as/if needed).  

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components have a `state` that holds current needed variable for a specific component that will need to be updated at one point.
If the componenet does not have variables that need to be stored and updated, you can use a Function component. Functional components
can still receive props, but do not have a state object stored on them.