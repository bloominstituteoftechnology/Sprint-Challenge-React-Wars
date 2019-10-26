# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library that allows us to create apps with dynamic components that allow information to be passed in, re-rendering only the changed component, instead of the entire page.

1. What does it mean to think in react?

To be conscious of component re-usability, being mindful of what hooks and states you'll need to use to achieve what you're setting out to design/render.


1. Describe state.

Mutable data held in a component/component array

1. Describe props.

non-mutable data that is held in a component that must be passed down from a parent state

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are things that happen every time the page mounts, and can be given parameters inside of an array to listen for changes to. You can create create effects that "clean up" previous effects etc to cut down on clogging.