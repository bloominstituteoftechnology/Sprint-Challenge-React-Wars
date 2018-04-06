# Answers

1. What is React JS? What types of problems does it solve?
It is a JavaScript library.  It helps the creation and handling of components to be reused in the construction of a web application.

2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.
ComponentWillMount:  Runs before render does.  This does not *cause* render to run.  Soon to be deprecated.
Render:  This runs when there are changes that have been made to state values, so they can be displayed to the user.  This is when data is displayed, NOT manipulated.
ComponentDidMount:  Runs after render does.  THIS is when you manipulate the data.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
If you need access to "this." then you use a class component, to keep the object in memory.  Otherwise, use a functional component, as it gets used and then discarded, freeing up memory.

4. Briefly describe PropTypes and what we use them for when building react applications.
PropTypes state required data types for variables, so you can ensure you are getting the correct data.  They help limit errors.
