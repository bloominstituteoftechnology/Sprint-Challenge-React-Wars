# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a view framework that takes a declarative component based approach to creating applications.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The react component lifecycle allows us to properly update/rerender a component and application state.
The constructor is used to set initial state.
ComponentDidMount can be used make an asynchronous call that will allow us to update state.
Render puts all of its content onto the dom.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components allow us to have state at the behest of importing react lifecyle methods

functional components are succinct in that they contain no state and can be used to render props being passed down
