# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a front end library that provides a performant, declarative, and composable way of developing User Interfaces (UIs). It primarily solves the problem of scaling your application when your view and data start to get out of sync.

1.  What does it mean to _think_ in react?

Thinking in React just means thinking about each visual aspect of your UI -- be it a button, container, etc -- as a composition of smaller reusable pieces of UI.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

class components and functional/presentional compnents can both be stateful. It used to be the case that only one was (class) -- but with the advent of the new hooks API, you can now use state with either appraoch. The main difference between stateful vs presentational components is that stateful components are responsible for maintaining and updating their local state and rendering/passing it along; this differs from presentational componenets which don't produce their own localized state, but instead are either static components that render soley static HTML, or they render/update the state of their parent components.

1.  Describe state.

State is the data that powers your application.

1.  Describe props.

Props are the vehichle by which you carry the data (and functions that can change data) throughout your app