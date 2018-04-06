# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a JavaScript library that enables to easily build reusable components and work easily with the DOM. It differs from other JavaScript frameworks in that it only deals with the view.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The react component lifecyle is the process with which components are rendered and updated. 

render is triggered whenever state is changed.

componentDidMount is called when a component is initially rendered and then again when its state changes thus triggering a render call. It is usually used when we need to fetch data from a third party. 

componentWillMount is called when the component is initially rendered.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

You use a class/stateful component when your component needs to maintain state while a functional/presentational component is used when your component doesn't need to maintain state.

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes is a library used to validate props data being passed to a component.
