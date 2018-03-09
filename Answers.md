# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is a JavaScript library that helps people build/create Interactive UI's, It differs because it is a Component-Based framework.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle uses what is called "Lifecycle Methods" to run certain code at certan times in the process.

componentDidMount() -  This method is invoked right after the component is rendered on the screen.
render() - This method examines this.props and this.state and returns either a React Element, string or number, null, or a boolean. it is called when a component is being created.
componentWillUpdate() - This method is invoked right before rendering when a new prop or state is being recieved.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component uses 'state' to hold a variable for a component that will be updated later on.
Functional components can still use props like Class/Stateful, but if the component does not need to be updated then you would use a Functional component because it does
not have a state object stored on it. 