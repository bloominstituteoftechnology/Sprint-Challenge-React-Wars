# Answers

1.  What is React JS and what problems does it try and solve?
    React is a Javascript library, that takes a lot of the burden of loading off of the DOM, and places that burden in the "virtual DOM".  It allows you to create a very rich user interface that is very reactive. 

1.  What does it mean to _think_ in react?
    I would say breaking the HTML down into individual components. Writing each component in it's own file, and loading them through one App file.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A class/Sateful component can have State, meaning data that can be changed at a later time.  A functional component does not have state, It can call data that is stored in a Class State, but not change it by itself.

1.  Describe state.
    State is data stored in a class component, and that data can be changed with user input with setState(). State is mutable

1.  Describe props.
    Props are information that a parent component passes down to its children.  You can pass pretty much anything down as a prop, such as variables, and functions.   