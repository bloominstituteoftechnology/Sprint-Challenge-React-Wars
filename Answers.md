# Answers

### What is React JS? What types of problems does it solve?

React JS is a javascript library. React solves large scale DOM manipulation without significantly decreasing the users' perceived performance. It does this by having a virtual DOM and allowing the majority of the background to slowly render.

### Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

The React Component lifecycle is basically: Born (when the component is created and inserted into the DOM), then it lives(where it goes through a series of updates and modifications within the DOM), then it dies(or is removed from the DOM.)


### Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A stateful component stores information about the it's state whereas a functional component calculates it's internal state but never directly changes it. A stateless is just a JS function. 


### Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are just a fancy way of letting checking the output of our code. We use them to create functions that are multipurpose and outwardly simple.