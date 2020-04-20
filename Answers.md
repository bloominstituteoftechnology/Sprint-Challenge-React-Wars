# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces. Through the Virtual DOM, it solves the problem of updating the actual DOM when the state of an app changes. This is especially important when data for a page changes at high rates and the DOM needs to update very fast and reflect across other parts of the UI that use the same data. Think the feeds on Twitter or Facebook.

2. Describe component state.

Component state is an object that determines how the component renders and behaves. It's where the components data is stored internally. useState allows you to change the state of the component. Whenever the state changes, React will re-render the component.

3. Describe props.

Props are essentially arguments passed from a parent component to the components invoked within. 

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. We can sync side effects with certain state or prop changes by passing in a dependency array as the second argument to the effect hook. 