# Answers

1.  What is React JS and what problems does it try and solve?
ReactJS is a UI library that allows the developer to create powerful, complex applications. Modern applications and websites are extremely complicated, interactive, and constantly updating with user content; React solves this problem by providing a smooth experience to the user and simple programming paradigm to the develper. React abstracts away working with the DOM directly and instead uses the Virtual DOM (which is more straightforward to work with) to update any changes over time.

2.  What does it mean to _think_ in react?
It means to think in terms of creating small, reusable UI components that can be pieced together to create a much larger application.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional/presentational components are simpler but have less functionality that class components. They can be passed `props` but don't have state. Class/stateful components have access to state and life cycle methods (and methods more generally can be used with classes). It seems like functional components should be used as often as possible and then class components should be used to shape how data flows and how events are handled.

4.  Describe state.
State represents the parts of the application that can change. If someone is adding or deleting something, logging or logging out, etc.—this will involve state.

5.  Describe props.
Props are how different components in a React application talk to each other. Data is passed from parent to child node and that data is immutable (doesn't change).