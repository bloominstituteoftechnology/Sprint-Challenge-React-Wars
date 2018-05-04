# Answers

1. What is React JS? What types of problems does it solve?

React JS is a JavaScript library that renders, creates, or builds User Interfaces. It solves the tendency of applications to slow down due to increased user activity. Applications slow down when the DOM is overloaded by events or activities.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React Component Lifecycle is a concept that describes what a React app does when it transfers data and renders UI on the DOM.

a. render() -- A method that returns a piece of DOM.
b. componentDidMount() -- A method that fetches data from render().
c. componentWillReceiveProps() -- A method that receives new props.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component deals with dynamic data, whereas a functional component does not deal with dynamic data. The latter does nothing else than merely render UI on the DOM.

4. Briefly describe PropTypes and what we use them for when building react applications.

We use PropTypes to check the types of data we're dealing with in React.