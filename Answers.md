# Answers

1.What is React JS? What types of problems does it solve?

React JS is a javascript library that attempts to make building large scale more efficient for developers. It accomplishes this in many ways including the use of reusable components and a Virtual DOM.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

How the Component Lifecycle works:
    1) Declare a class component that extends the React.Component parent, which gives you access to its methods
    2) Create a constructor with super() inside to make use of the 'this' keyword
    3) use the life-cycle method 'render' to render the UI to the DOM

Lifecycle Methods:
    1) Render - gets the elements that you pass it to show up on the screen.
    2) componentDidMount -This method tells the DOM nodes to 'go here'. Useful to set up subscriptions.
    3) setState - tells react that this component and its children need to be rerendered with their updated state. Useful when using evernt handlers.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful components are classes that extend the React.Component and make use of its methods (like render).  

Functional/Presentational components are variables that hold information to be passed to the DOM.


4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are used to check what the data type of an element is, and when used in conjunction with .isRequired, can ensure that we only pass in the correct data type.