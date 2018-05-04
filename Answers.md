# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is a library used for building user interfaces. React is great for pages that use components that are repeated (as in the case of social media apps--like Facebook or Instagram). It allows you to use the virtual DOM instead of  a regular DOM. This means that you can have users interact with your components, without it complicating your codebase. It allows your application to react to usage by users, eg likes, comments, etc.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React.Component is the base class that lets us use methods that the React team has put together. These methods give us control over how our components look. 
1-set up a class component and extend React.Component parent fclass.
2-use the constructor function to set up some state.
3-render the UI to the DOM using the render method.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are just JS functions, they take optional inputs called props. Do not have state.
Class components have state but can exist without state as well. Class components always call the base constructor with props.