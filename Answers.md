# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a framework for creating reusable components that can be assembled into a web application. It is intended to be a lightweight framework with an emphasis on fast rendering of components by mirroring the DOM structure.

1.  What does it mean to _think_ in react?

    This mean that when designing a web app, you think about it in terms of how it can be structured out of ReactJS components which can be built upon each each starting at the root node and working down to individual tags.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class component is written using conventional JS class declaration syntax and can contain state variables which persist between renderings.  A functional component has access only to whatever state is passed to it via props at rendering time, and can be written using a shorthand HTML-esque notation.

1.  Describe state.

    State is the set of class variables belonging to a component which are declared in the constructor and persist in the app between renderings.  In order to manage the state of an app in an orderly fashion, state should be limited to only those components for which it is essential (such as the top level App component). All state variables should be stored in the this.state object and updated via the this.setState method, so that ReactJS knows when it needs to rerender the app.

1.  Describe props.

    Props are parameters that are passed to components at render-time, and are made available to the components in the form of a props object.
