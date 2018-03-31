# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

ReactJS is a JavaScript library that makes use of reuseable components to simplify UI development.  ReactJS differs from other frameworks in that ReactJS uses a Virtual DOM to keep track of changes that are made to the code and only re-renders the changes, does not refresh and reload the entire page.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
 
 Lifecycle methods determine how a component reacts to changes in the app.  They are called when the component is created, after creation, and upon deletion of the component.

 Constructor- called when the component is initialized to determine how the component will render.
 Render-uses the Virtual DOM to instruct the browser how to display the component.


 componentDidMount-called just after the component renders, used to set up process to display and/or update any data or state in the component.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class/stateful component is used if there are any changes that need to be made to the data of a component.

A functional/presentational component is used if the only thing you wish the component to do is render to the page.



1. Briefly describe PropTypes and what we use them for when building react applications.