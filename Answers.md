# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

JavaScript library for building user interfaces. It solves the problems when state needs to change often. Allows the code to be optimized and renders data more efficiently, via props and state. 

1. Describe component state.

Object that determines how the component renders/behaves. State allows us to create components that are dynamic and interactive.

1. Describe props.

Properties – they are passed into components like function arguments. (immutable) they are a way to pass data from parent to child.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

anything that affects something outside the scope of the function being executed. Dependency arrays as a second argument to the effect hook. This ensures that the effect doesn’t render after each change. 
