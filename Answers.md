# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library for javascript that allows you to write HTML & CSS alongside Javascript with JSX & styled-components. This allows developers to separate their code based on rendered components. We're also able to import fully set-up components through reactstrap. 

1. What does it mean to think in react?

It means to build web-apps as pieces of components put together. React developers consider the high-level structure as well as interaction between website pieces while abstracting imperative logic into smaller lower level component pieces so code is organized, easy to read, and easy to scale. 

1. Describe state.

State keeps relevant dynamic information to tell code when/how to run. 

1. Describe props.

Props allow information to be passed to lower-level componenents. State is often passed in props to allow components to speak to each other. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects in react are anything occurring from a component being mounted that's outside the scope of the function's return. These changes cause a re-rendering of the component which runs the side-effect again in an infinite loop if not wrapped in a hook and given restrictions to when the side-effect'ing code can run. With the useEffect() hook, effects can be synced to run based on [state, prop] dependency changes placed in the 2nd paramater of useEffect(). 