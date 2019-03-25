# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JavaScript library for building user interfaces. It updates and renders certain components when data changes. The problem it tries to solve is the need to refresh an entire page any time a single element is changed. What make sit so efficient is that it updates only the components that have been changed, thus reducing the number of DOM operations and improving performance considerably.

1.  What does it mean to _think_ in react?
Thinking in React means breaking each piece of the UI into individual components, then organzing them into a component hierarchy.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class components are stateful and can access props using the 'this' keyword, they provide more functionality than functional components and make use of life cycle methods.
Functional components are simpler and are mostly just used to arrange UI. They do not have use of the 'this' keyword.

1.  Describe state.
State refers to a component's properties. It is private and fully controlled by the component

1.  Describe props.
Similarly, props refers to a component's properties. More specifically the component's input data.