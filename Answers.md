# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library created by FB devs. It helps with seperation of concerns through component files and allows dev to manipulate the the indirectly with the virtual DOM, and solves rerendering issues by making functional and class components that can be directly updated.

[ An example would be of a twitter feed or a twitter comment pop up on screen without having to refresh the page.]

1. What does it mean to think in react?

It means thinking "how can I seperate things in component files to make my code more manageable?" 

1. Describe state.

 State, or data - is what we display in components for our users

1. Describe props.

Props is what is used when components need to share state


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. 

We sync effects by passing in a dependency array as the second argument to the effect hook.
