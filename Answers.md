# Answers

1.  What is React JS and what problems does it try and solve?
  React JS is a javascript Library that speeds up web app development by providing scalable and reusable code structures. The core idea of React is the idea of the component, a reusable block of code that provides a feature or functionality to a web app. Another important feature of react is it's conciseness. It does a lot of things "under the hood" that cut down on the amount of writing that developers have to do when creating structures. React applications are also known for their speed, because they access an API called the "Virtual DOM", React apps can provide dynamic behavior to web pages while relying on minimal rendering resources.
2.  What does it mean to _think_ in react?
  Thinking in React means thinking of a web page in terms of components; blocks of code which are each responsible for one task. These blocks are nested together in various parent-child or sibling-sibling relationships that enable them to work together to produce a fully functional (and infinitely scalable) web page.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  Perhaps the biggest difference between a Class and functional component is in the name. Although both are technically objects within JavaScript's framework, Functional components behave as functions, meaning they do not hold data, but rather input and output data while Class components hold and manipulate data in a similar way to a typical classical object. This distinction leads into the other big difference between Class and Functional components. Class components can have "state" while functional components cannot. "State" is simply a type of data that can be manipulated over the lifecycle of a function, it is distinguished from "props" which are also a form of data but an immutable type, meaning it cannot be manipulated. Functional components have props passed in at the time of invocation while Class components inherit props from the base React.Component() constructor and do not use them in the same way as functional components.  
4.  Describe state.
  State is a mutable data type that is passed into a class component and used to manipulate or change features of a webpage.
5.  Describe props.
  Props are an immutable, read-only data type that are primarily used by functional components in order to display a certain piece of UI to the browser.
