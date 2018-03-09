# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    * My understanding of this is rather limited, but I would say that it is a JavaScript library that once understood, makes it much easier and faster to create interactive websites.  As a Single Page Application, React is very fast and efficient when it comes to rendering new information to the page.  It is particularly fast because it only re-renders what has changed -- I do not fully understand it, but React keeps a virtual version of the DOM which it checks against the actual DOM to make this possible.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    * I feel pretty unclear on this, but looking at the documentation, I would describe the React Component Lifecycle as a large collection of methods which run by default when React components are created, updated or changed, or removed.  Some of the lifecycle methods we have become familiar with include setState(), which is the go-to API for changing the state on a component, componentWillMount(), which is used if you want to update the component's state immediately after it has been created.  And of course the render() function, which is called both during the initial mounting of a component and everytime that component is updated after a change.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    * Typically a Functional component is preferred unless there are specific lifecycle methods needed or if your component needs access to this, in which case a Class component is used.  Functional components cannot have methods or access this.  If methods and use of 'this' are not required, then for ease of reading and for sake of keeping code simple, Functional components are recommended.  
