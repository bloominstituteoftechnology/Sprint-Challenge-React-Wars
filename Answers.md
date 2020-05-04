# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a javascript library created by Facebook that helps you build projects by using components 
    to prevent the rewriting of code. It also solves the problem of expensive DOM operations by using the
    'virtual DOM', enabling updates only on the specific part of the DOM tree that has changed.  

1. Describe component state.
    
    Component state is a JavaScript object that holds the state or position/value/score etc of the current
    data. Component state determines how a certain component renders and behaves. This is useful in applications
    that have data changes and you'd like to see those changes in real-time/on state-change.
    
1. Describe props.

    props are values or functions passed down to components to be used. Props is short for properties. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    
    side effects are anything that affects something outside the current function. We can use useEffect to watch
    over certain states to determine when we want to update data or change components.  