# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a UI library created by developers from Facebook. React tries to solve the issue of rendering the DOM slowly due to too many DOM operations. React solves this by the use of a concept named the Virual DOM. When a page is rendered on react, the state of the DOM tree structure is stored and updates are made by the UI on the old DOM tree, but updates only the ones that were changed to increase speed. 

2.  What does it mean to _think_ in react?

React is a component based system, you think during the creation of the app you are creating. React works with declarative
UIs. You also think in terms of components with props and states, which are React's basic concepts. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

There differences are that Class/Stateful components are mutable and functional/presentational components are immutable (for the most part). Functional components take props, and class components take state. Syntax is also the difference between the two. 

4.  Describe state.

State is mutable. It can be changed via the this.setState, which is the only way you can mutate it. It determines how the component renders. 

5.  Describe props.

Props are objects and are short for properties. They are immutable (read only). You can change it for purposes of mounting to the DOM. They are used to display data to the user. Props have reusability to use multiple times. Props will be set to key object values that is rendered.