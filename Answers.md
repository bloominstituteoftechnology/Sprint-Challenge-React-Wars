# Answers

1.  What is React JS and what problems does it try and solve?

    a. React is a library that attemps to solve the problem of over touching the DOM. It does this with the use of a virtual DOM, a diffing algorithm and lifecycle methods.

1.  What does it mean to _think_ in react?

    a. Thinking in react means to think about how your application should be laid out in components before actually building it. It also means thinking about which component state should live in, and where props need to be passed to, and what life cycle methods need to be used in each component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    a. Class based components are used when there is some data the keep track of that is local to that component. They also be used for other things like Refs. Functional presntation components are useful for receiving props (or not) and then displaying them on the screen. There is no state management going on in a functional component.

1.  Describe state.

    a. The data in the app that will be mutated overtime.

1.  Describe props.
    
    a. Props are immutable pieces of data that are received from a parent component to used for display/read-only purposes.
