# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a library for building user interfaces. A problem that it tries to solve is one with DOM operations, React has a virtual DOM and when there are updats to the UI a diff is generated which compares the old DOM with the new virtual DOM only updates the items that have changed.

1.  What does it mean to _think_ in react?
I think it helps you break down your architecture into smaller reusable components that can then be used anywhere throughout your app. Another benefit of thinking in react is that when you're ready to scale your application to a larger audience that React is built to scale and when setup properly it can scale much smoother than other solutions to build web apps. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class - Has state and lifecycle methods and a new instance of a class component is generated each time it's rendered.
Functional - Has no state or lifecycle methods that takes props and returns a react component.

1.  Describe state.
This is the key to the component and determines how the component renders and behaves. This is what lets you create components that are dynamic and can update on the fly.

1.  Describe props.
