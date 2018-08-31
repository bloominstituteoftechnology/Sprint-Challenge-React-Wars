# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a UI library that uses components to help build large, powerful web applications. It solves the problem of providing a smooth experience for users and those developing applications. It does this by encapsulating UI elements into Components. React uses the virtual DOM to update any changes that are made while a user interacts with an application.

1.  What does it mean to _think_ in react?
    Thinking in React is about breaking down UI elements into components that follow the single responsibility rule which states that a component should ideally only do one thing.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A component that is stateful is defined using ES6 Class syntax and should contain a constructor method, super() call, and a state object. The state object allows the component to store data that will be modified while the user interacts with the web application.
    Functional components are defined using a function that takes in a props object. The props object contains all the options/properties that are passed to the component as attributes and are used in configuring the component. The functional component does not have much logic besides a render() function that returns JSX.

1.  Describe state.
    React uses the object state to store data that is relevant to the application. This is used to store information that should render a new UI every time the data is updated. State is modified by using the setState() method and passing ni an object. The state object should not be mutated directly.

1.  Describe props.
    The props object stores the options (or properties) that can be configured when defining a new component. The props objects are passed as attributes when calling a component and can be accessed from within the component through the props object.
