# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

What is React JS? What types of problems does it solve?
    Reacat is a JS library.  With React, the Virtual DOM is updated when a user interacts with the website and the difference is rendered to the UI.  

Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.
    The React Component Life-cycle is a method that lets you update the UI.
    1.) componentDidMount: this indicats some element has been rendered.
    2.) render(): this tells the DOM what needs to show up on the UI.
    3.) componentWillUnmount: is part of the unmounting process and basically says that after an element has mounted it can now unmount.  Basically will be removed from the DOM.

Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class/Stateful component can utilize render and state.
    Functional/Presentation component doesn't have either render or state, so it's easier to read the code.

Briefly describe PropTypes and what we use them for when building react applications.
    PropTypes indicate the different property types of an element.  They can be an array, string, boolean, function, number etc.  PropTypes can be useful when you are typehecking an element.  Like say you have a form and the user inputs their age instead of their name.  You can indicate to the user they have the wrong type of input in that field.

