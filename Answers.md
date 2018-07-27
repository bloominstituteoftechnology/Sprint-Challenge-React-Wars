# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a view library for building interactive UI in a declarative manner.
React helps in building complex UIs by letting the developer break down the UI
into individual components and composing them.

1.  What does it mean to _think_ in react?

To think in react means to think of a UI in terms of components and the way they
interact with each other.

1.  Briefly describe some of the differences between a Class/Stateful component
    and a Functional/Presentational component.

A functional component is purely a function of the props passed into it. They do
not have any side effects and their only purpose is to return visual components
based on the props. They are used present data to the users.

A stateful component maintains an internal state and modifies its shape
according to the state. They are used to control other components and trigger
the rendering of itself and all the child components when the application state
changes.

1.  Describe state.

A state is a persistent object inside of a class component which is used for the
purpose of tracking the app state. The state object persists through multiple
renders and all the components are a function of the current state of the
application.

1.  Describe props.

Props is an object that is fed into React Components to act as a variable input
to a function. The rendering of the components can be customized with props.
With each render, a new props object is passed to the components. Props is a
read only object.
