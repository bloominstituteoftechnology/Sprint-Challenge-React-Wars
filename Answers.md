# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a JavaScript library made for the sole purpose of building dynamic user interfaces. It attempts to solve
the issue where if you have a ton of components, you can use these components in your UI repetitively or dynamically.

1.  What does it mean to _think_ in react?

My best guess at this point is that to think in React JS you want to think more modular by breaking up your interface
into many working parts so you can use these working parts in as many ways as possible.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The main difference between these components is that a Class/Stateful component is used to process information by
generating new states in the virtual DOM. A Functional/Presentational component is used primarily to render elements
to the DOM.

1.  Describe state.

State is the object that is used to rerender the DOM. This is managed within the component.

1.  Describe props.

Arbitraty inputs set by a parent fixed throughout the lifetime of a component and used to return information on the DOM.