# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library used for building user interfaces.  React solves the problem of using repetitive code for DOM manipulation and making it more dry, readable and user friendly.  This also means, less errors within code to worry about as the syntax is usually short and to the point.

1. Describe component state.

A component state is a javascript object which holds information that influences the output of a React render. This is similar to props, except state is managed within a component. 

1. Describe props.

Props are like state in which it is a javascript object that holds information, but unlike state, props are passed to a component rather than managed within.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that changes the state of a function after that function is executed.  In order to sync effects, you would use a series of useEffect statements in addition to .then .catch within each side effect.
