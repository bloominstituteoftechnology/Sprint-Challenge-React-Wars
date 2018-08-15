# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.

1.  What does it mean to _think_ in react?

Remembering that code is read far more than it’s written, and it’s extremely easy to read modular, explicit component-based code. As a project builds out large libraries of components, developers appreciate the explicitness and modularity of component-based code, and with component reuse, the lines of code will shrink overall.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components accept a single “props” (which stands for properties) object argument with data and returns a React element.
Classes have some additional features, namely state and lifecycle methods.

1.  Describe state.

A component needs state when some data associated with it changes over time. The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state. To do so, it must call this.setState(). Only components defined as classes can have state. For each particular piece of changing data, there should be just one component that “owns” it in its state. Two different components should not try to have synchronized states. Instead, their states should be lifted up to their closest shared ancestor, and passed down as props to both of them.

1.  Describe props.

props are inputs to a React component. They are data passed down from a parent component to a child component. props are readonly and should not be modified in any way. If some value in response to user input or a network response needs to be modified, use state instead.
