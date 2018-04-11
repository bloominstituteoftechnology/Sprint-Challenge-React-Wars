# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
A component based JS framework that utilizes a virtual dom architecture to build performant front end applications. It's component based and uses a virtual DOM.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
It is the flow of events from component creation to rendering to unmounting from the DOM.  We can use lifecycle methods to hook into those events.

constructor:  fires during intial component creation 
componentWillMount:  fires right before component is mounted to DOM
render: fires when component mounts to DOM

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Class/Stateful component is an actuall JS class created with the class keyword.  It holds state (data it needs to keep track of) and it can use lifecycle methods.
A Functional/presentational component is a normal JS function with no state or lifecycle methods.  It just returns a JSX template that gets immediately rendered.

4. Briefly describe PropTypes and what we use them for when building react applications.
A way to check the type of props that are passed into a component to make sure they are the correct data type.

