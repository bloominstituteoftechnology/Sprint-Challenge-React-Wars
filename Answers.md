# Answers


1. What is React JS and what problems does it try and solve?

React is a library created by Facebook that makes use of components which allow the rapid creation of very large, complex, and dynamic applications through the virtual DOM while not bogging down the actual DOM. This is accomplished by removing much of the data from the DOM and only updating the necessary elements of the actual DOM. It can make use of JSX, an HTML-like syntax that can be used to create highly dynamic, variable, and individualized experiences for users, while still allowing use of vanilla JS. React can make use of the volumes of data available in an efficient, fast, and relatively simple way.

2. What does it mean to _think_ in react?

To think in React means to understand the app you are looking to build from the point of simplicity, reusability, and ability to be dynamic. To use the React components to create large, scalable apps that are fast and readable. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component exists to hold data and to provide that state to the Presentational components. Functional/Presentational components receive props as an argument. Functional/Presentational components should not hold or alter state, but should refer to the Class component for that state.

4. Describe state.

State is data (properties) of an object. State holds the data and it is passed to other components. When state changes, the components change.

5. Describe props.

Props are similar to state in that they are arbitrary properties (Similar to arguments in a JS function) that returns a React element. Props are immutable, and are how state is passed between components. If the props need to be changed, the state should be changed.