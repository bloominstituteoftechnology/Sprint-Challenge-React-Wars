# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

- React reduces the expensive nature of DOM manipulations with web apps/pages that have high rate of data changes over time. React.js is not a complete MVC framework like others are and should only be considered the 'V' portion of the MVC whole.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

- a Set of built in methods that control a react component from birth and death. The `render` method will actually render the jsx given to the component. `componentDidMount` is where you would want to load your data because this indicates that the componenet is mounted and ready to use. `componentWillRecieveProps` used to handle new data streaming in through props.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- A Class Component is a component that will need to have an internal state whereas a Functional component is there to just purely render what it's given.


4. Briefly describe PropTypes and what we use them for when building react applications.

- PropTypes allow us to develop and debug our React applications alot more safely by manually type checking our prop data.