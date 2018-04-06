# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is meant to help with DOM manipulation by making it easier to work with and focus on being component based, letting whatever you made earlier be 
reusuable in other parts of the page. It also can take in different or updating data and display it easily. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

To free up memory, components are used and eventually removed to make room for future components. First mounting which is called whenever a component is made,
then updating, whenever a component is receiving changes to props or states,  and unmounting when component is being removed from the DOM. 

constructor() - Initializes state and is used with ES6 classes to create components. 
render() - Checks for this.props or this.state, then returns a value.
componentWillUnmount - Cleans up any processes being done by the component to ease up on memory, then removes the component. 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The functional component is a component that returns JS and then displays it's values on the browser, which is basically a normal JS function.
 Classes however, is uses React's various features such as state and being part of the component lifecycle. 

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are used for testing in the production code, to check if the proper values are being sent. It's typically used as a tool for
debugging. 