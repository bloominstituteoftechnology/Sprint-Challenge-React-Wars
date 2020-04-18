# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library that solves the problem of having static and stagnat websites. It allows data to constantly change and render to the screen from the user-side wihtout having to alter the server-side original code.

1. Describe component state.

Component state is like taking what the user sees on the screen and taking a snapshot of it. It includes all the data, components, and styles that the user sees. If something is changed by the user, then the state has changed and the browser re-renders.

1. Describe props.

Props are properties of data that are given to a component as an object with a key/value pair. If the component is an empty box, props fill in the blanks to give a component life.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are things that happen outside of the scope of a function. A pure function would return the same result everytime. But, for example, if a network request is submitted and the repsonse causes a change in state, that can alter what the function returns. That would be a side-effect.
