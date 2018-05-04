# Answers

1. What is React JS? What types of problems does it solve??
    -React JS is a JavaScripy libary that allows you to code in a pattern in which only the UI interfaces are updated. It promotes scaleability and is easy to learn because it is written in JavaScript

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    
    -The React Component Lifecycle provide many methods during the life cycle of a component. By understanding the Lifecylce of a componeny you know when to call a method in which it will allow you to update the UI and application state.

    -constructor - the constructor uses a special method called super which allows you to extend your class. Super will call the constructor of the parent class and will allow itself to initalize itself, while gaining access to it this.props field

    -componentWillMount - once the props and state has been set in the constructor, you can call the componentWillMount function which is before the intial render. This method gives you the chance to handle configuration, update the state, and prepare for the first render. 

    -render - this method will allow you to render and create JSX. You also have access to this.state and this.props to control how elements should be generated. The render method is the only method that is active across multiple lifecylces as well 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    
    -class components are capable of maintaining their own state.

    -fucntional components are pur javascript functions that return React elements.



4. Briefly describe PropTypes and what we use them for when building react applications.

    -PropTypes prevents you from writing bugs and keeps you in the parameters of your application. Proptypes saves yourself from yourself.
