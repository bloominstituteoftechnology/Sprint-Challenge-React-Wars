# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is an efficient open source JavaSCript library created by Facebook for building user interfaces, with a one way data flow. There are many differences between React and other frameworks, including accepting JSX, managing the DOM with its own virtual DOM, working with components and subcompnents, and using Props(properties).


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle is a set of methods that are ran at different times in the lifecycle of a component. The component contains all of the lifecycle methods, and will include phases of mounting, updating, and unmounting. These phases contain methods and functions, including but not limited to componentWillMount, componentWillUpdate, and componentWillUnmount. 

componentWillMount is called before rendering. All things that you want to happen before a compnent mounts (initializing state or props) should be here.  
componentWillUpdate is called JUST before rendering, but only if the componentShouldMount returns true.
componentWillUnmount is the last method in the lifecycle and is executed lastly before a component gets removed from DOM.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional/Presentational components take in props, Class/Stateful components can take in state, but can exist without it as well. While the constructor is also optional, it's not recommended to go without it and super() for Class/Stateful components.
