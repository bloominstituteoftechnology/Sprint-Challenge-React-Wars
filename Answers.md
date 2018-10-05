# Answers

1.  What is React JS and what problems does it try and solve?

React JS is an open source Javascript library used for front-end development. It makes development easier by breaking a page into component pieces that can easily be reused in other parts of the application. This means components can be developed and debugged separate from the rest of the code. It makes front end development more modular. Given that React JS is just a library, it can be used with other libraries and frameworks making development even easier.


2.  What does it mean to _think_ in react?

To think in React means to think of a page as a series of components with parent/child relationships. The data of a particular component is its state and state can be updated for a component without the other components needing to be re-rendered as well.


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component does not contain state, but is responsible for the overall layout of the component. It is not a class, but is a function, commonly designed using ES6 arrow syntax. It can contain propertiers that were passed in from the parent.

A class component can contain state. If the state is updated, the component will re-render to the screen with the new data from the state.

The main reason to one or the other depends on if the component needs state. If it doesn't need state, a functional component will work perfectly, otherwise it is best to use a clas.


4.  Describe state.

State is a component that holds data that may be updated and require re-rendering to the screen. It is held in a variable object called state and updates are to be handled through setState, which is part of the React.Component object custom React classes extend off of. State is not to be set directly, but through setState. When doing this, setState will call the render method and the component will be updated in the web browser to reflect its new state.

5.  Describe props.

Props are properties that are passed in from a parent component to a child component. This allows a child component to be more dynamic as it can be used more as a template and properties can help define the specifics of the components. For instance, you could have a generic button component and use it to create all the buttons on your page, passing in as a property different handler functions. This also could help with styling components or passing a parent's state to a child.
