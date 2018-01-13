## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?

React is basically a JavaScript library designed with building user interfaces in mind. It is different from other JavaScript frameworks because the components tell React what to render which allows React to only update and render the right components when data changes.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Components in react are constantly created, updated, and deleted depending on the environment in which they interact.
Three methods:
1.) componentDidMount is called after the render() method and would use to set-up any long-running processes such as fetching and updataing data
2.) componentDidUpdate is called just before a new component is rendered and it is used to update any third party libraries if they need another update after the render.
3.) componentWillUnmount gets rid of what was set-up by componentDidMount

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

Class components have access to features such as state while functional components are just JavaScript functions.

4. Name the three arguments that are passed into the `React.createElement()` function?

Type, Props, Children