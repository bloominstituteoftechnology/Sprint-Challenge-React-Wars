# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library designed to streamline the process of DOM operations via a virtual DOM. Rather than rendering the page for every data change, React JS uses components that are updated in this virtual DOM.

1.  What does it mean to _think_ in react?

Thinking in React entails breaking down a large application by thinking about exactly how it works and creating smaller, separate parts (components). It frees you from having to think about how you transition from one state to another, and then to another, and so on, because data travels directly from parent to child.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component has state and is a javascript class. React initialises the component class in order to call a constructor, initialise state, and more.

A functional component is just a plain javascript function which takes props as an argument and returns a react element. It has no state, which means that you can’t reach `this.state` inside it.

1.  Describe state.

State is data a component may change to trigger an UI update, in response to an event.

1.  Describe props.

Props are immutable properties passed to a child component that can hold many data types (e.g. array, object, number, function, others)