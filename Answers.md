# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Created by Facebook devs, used to create components while making loading times faster. Instead of reloading a whole page when the state of something changes, it just reaches out to the virtual dom to grab a specific element and only changes that component.

1. What does it mean to think in react?

To think in a way of components and component hierarchies.

1. Describe state.

State, or data - is what we display in components for our users

1. Describe props.

 Props are basically parameters in React. They are used to pass down data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed.
We sync effects by passing in a dependency array as the second argument to the effect hook.