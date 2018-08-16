# Answers


## Questions
1. What is React JS? What types of problems does it solve?
React is a javascript library that makes it easier to build the view in web apps. It solves having to create the same componenet over and over. It also solves scale issues as programs get bigger it is much easier to use react to expand on the code base while keeping everything looking nice and uniform.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. The lifecycle is the steps taken from life to death or from mounting to unmounting of a react component.

componentWillMount: only called once in the life of a component takes place before render so no access to the dom exists. 

componentDidMount: created after the render function you can use it to initilize data that relies on the DOM. Some examples are ajax calls, 

componentWillUnmount: Used to setstate this function runs before the react component is destoryed.

render: Used with JSX to display data to the virtual dom and to the user. It should not modify state and should display the same thing each time. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class stateful component has state as the name implies.
A presentational component does not have state and is a simple javascript function that accepts optional arguments called props. 

4. Briefly describe PropTypes and what we use them for when building react applications.
Proptypes is the way react can make sure that the data being passed is of a certain type to protect yourself from malicious intent and mistakes of changing type when you did not want to.
