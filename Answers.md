# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is a Javascript UI framework. It solves problems like the reusability of various parts of an application.
Allows for relatively easy composability of components. Makes it easier to work with many event handlers.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
When a component inherits from React Component, it can access these lifecycle methods that are useful for events on the DOM. ComponentDidMount goes after componenet is invoked. ComponentWilUnmount is invoked after component is unmounted. getDerivedStateFromProps depends on the props that passed in.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class/Stateful Component has access to the component and its own state object. A Functional component has less functionality and simply mounts to the DOM without dependence on state or lifecycle methods.
