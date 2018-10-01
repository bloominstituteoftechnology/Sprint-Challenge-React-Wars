# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a framework created by Facebook engineers that is optimized for single page applications (like Facebook).  It features a virtual DOM and simplifies writing HTML by using a language called JSX.  JSX looks very close to Javascript but is not.  However, JSX allows developers to generate HTML dynamically at runtime by using a familiar syntax.

React is component-based (i.e. modular) in that components can encapsulate both logic and data.  In React's syntax data is referred to as 'state'.  States are contained within the component itself to avoid binding issues with 'this'.

2.  What does it mean to _think_ in react?

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  A: Class/Stateful component can be defined using an ES6 class.  Class components have more features than function components.  These additional features include the use of state.  State is a collection of data.  This collection is private to and fully controlled by the component.  In the component definition state should be placed before the 'render()' statement.

  A: Functional/Presentational component is created by writing a JavaScript function.  They are literally JS functions.  Functional/Presentation components accept a single property object argument (called a 'props') and return a React element.  Props are passed one-way, down from parent component to child.  Props are immutable and "top-down".



4.  Describe state.

5.  Describe props.
