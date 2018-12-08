# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JS library for building user interfaces.
React makes it easy to create interactive UIs that efficiently update and render the right components when data changes. 

2.  What does it mean to _think_ in react?
Thinking in React involves planning and thinking about how you will build your app. The steps the docs recommend are: breaking the UI into a component hierarchy, building a static version in React, identifying the minimal (but complete) representation of UI state, identify where state should live, and adding inverse data flow.


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are simpler components that have access to props, but cannot have state.
Class components extend from React.Component, have access to the `this` keyword as well props. 

4.  Describe state.
State holds information about a component. It is used to keep track of information between renderings that the component can create and update. 

5.  Describe props.
Short for "properties." Props are passed into the component and are immutable. 