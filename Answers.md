# Answers

1.  What is React JS and what problems does it try and solve?

    -React JS is a javascript library used for building User Interfaces. 
    -React JS helps with performance as directly manipulating the DOM is not efficient. React JS does not require a page reload and works with a Virtual DOM to ONLY update the single item a user interacts with. 


1.  What does it mean to _think_ in react?
    -a component should be a pure function which transforms data into a user interface
    -components should be as generic as possible to promote reusability.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    -Stateful = Establishes state / had methods
    -Stateless = Returns part of the UI

1.  Describe state.
    -if the component needs to CHANGE onf of its attributes at some point --> put it in state

    -- -- -- 
    -object
    -trigger render update
    -managed within the component

1.  Describe props.
    -object
    -trigger render update
    -get passed the component (like functions parameters)

