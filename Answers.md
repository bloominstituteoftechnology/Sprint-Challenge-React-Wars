# Answers

1.  What is React JS and what problems does it try and solve?
React is a JavaScript component library created by engineers at Facebook. It is used to create modularized/component based user interfaces that 'react' to changing states/data.

2.  What does it mean to _think_ in react?
_Thinking_ in React involves visualizing a webapp by its components and breaking down each component to its smallest component. This makes creating web apps much more scalable and responsive. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional/Presentational components create individual DOM element. Functional components do not have access to state. 
Class/Stateful components extend the base React.Component class. Class components have access to state.


4.  Describe state.
State is a data object that can be shared between components in an app and rendered on to the UI. It allows components to be dynamic and interactive. 

5.  Describe props.
Props are data set by the parent component and are fixed for the lifetime of a component (i.e. a prop is read-only data and a component cannot modify its own props).