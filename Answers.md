# Answers

1. What is React JS? What types of problems does it solve?
    React JS is a JavasScript library (a compilation of prebaked functions).  It solves the problem of overloading of the Document Object Module.  With React JS, a bulk of the work can be offloaded onto the virtual DOM so that when things change on a website as a result of event listeners being triggered, the entire website does not have to be re-rendered, just the portions that changed.  This allows for quick changes to be shown to the user.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The React Component Lifecycle is the process in which components in a React project live and die and at which points the state can be altered and data can be changed/managed.

constructor() is the method that called before mounting occurs and is the place where you initialize state and assign what in your component you to have state.

setState() is a method that is part of the lifecycle.  setState() is the way a developer can tell React what to look out for in terms of changes to the website and then what to do when those changes are made.

render() is a method that is required and is written at the end of a component.  It examines this.props and this.state and runs if there has been a change in state, modifying what needs to be modified based on the changes in state.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class/stateful component has state, which is the data/memory we want the component to worry about/work with.  Functional components don't have their own state but have props sent down from a class component.

4. Briefly describe PropTypes and what we use them for when building react applications.
PropTypes are are a way that a developer can type check data being passed to a child component to ensure that the data being passed is of the kind we want to be passed (i.e., if it is boolean, a number, a string, etc.).  This allows us to check ourselves before we wreck ourselves.