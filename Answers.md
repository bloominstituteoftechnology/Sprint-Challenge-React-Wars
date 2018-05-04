# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
* React is a Javascript library that was created by Facebook.  It is the has a virtual DOM that will check to see if anything was change when comparing to the DOM.  If something changes only that component(s) will be rerender and not the whole DOM.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
* React Lifecycle is a phase that react goes through.  One is componentWillMount().  This method is call before the initial rendering.  Another one is componentDidMount().  This method is call right after your component is injected into the DOM.  Another on is shouldComponentUpdate().  This method method allows us to decide whether the next component’s state should trigger a rerender or not.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
* A functional component job is to take in props and just render out the component.  It doesn't have any state variable or method.  A class stateful component can have a state, method, and variable.