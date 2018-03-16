# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? 

React JS is a front-end framework that gives developers a way to organize HTML, CSS, & JS code in units called components. 

The differences between React from other JavaScript frameworks, include the following:
-accepts JSX
-manages the DOM with its own virtual DOM
-works with components & props

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. 

React Component Lifecycle: The different methods that make up the life of a React component from rendering -> updating -> thinking about re-rendering -> disappearing entirely (birth-death).

React Lifecycle Methods: 
componentDidMount() - Component is ready for use
componentWillReceiveProps() - Component receives new props
render() - Component that examines this.props and this.state to return either one of the following: react elements, strings and numbers, portals, booleans, and even nothing

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful Component:
This type of component interacts with the React Component Lifecycle. This type of component interacts with its state and passes it as props to a functional component, and renders. 

Functional/Presentational Component (Stateless): There is no state object; They take in props from another component and perform a defined function when called
