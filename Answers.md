# Answers

1.  What is React JS and what problems does it try and solve?
ReactJS is a JavaScript library used to build user interfaces. It tries to solve problems of UIs not being interactive or responsive, and perhaps written in a convoluted way. React is based on modular components.

1.  What does it mean to _think_ in react?
Thinking in React is the process of breaking a UI down into constituent components, building a static version of the app, and then adding state and props to make it reactive.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A functional component is literally a function, and a class component is an ES6 class. They are generally equivalent, with the exceptions of 1) class components being able to store and update their own state and 2) class components can have their own lifecycle methods.

1.  Describe state.
State is a cache of data local to a class component that is initialized and later set by methods using the setState() function. It can be passed down to child components via props.

1.  Describe props.
Props are pieces of state or methods on a parent class that are passed down to a child component to be read and used. They are described using the `this` keyword.