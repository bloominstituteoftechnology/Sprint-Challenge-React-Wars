# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a JavaScript library primarily used for designing user interfaces.  At the base level, a person can think of it as representing the "V" in MVC (model-view-controller).  React tries to make it easier for a developer to ensure things are reliably rendered to the DOM (or to whatever format they're attempting to render to), through use of its own virtual DOM, which is constructed based on data passed from state or props, and reconstructed by React on the actual DOM. 

2.  What does it mean to _think_ in react?

"Thinking in React" means thinking about how an app should be structured when built in React.  This means considering how the various parts of a page should be broken into components, what kind of components need to be used, where state will live on your app, etc.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class component allows you keep state on the component, as well as make use of React's lifecycle methods if needed.  A stateless functional component, on the other hand, can be thought of as "just the render method" of a class component - it solely deals with rendering the component, most often based on data passed to it as props.  It is important to note that an individual can make use of class components without using state or the component's lifecycle.  And the vice-versa is also now becoming true - as of React v16.7.0 alpha "state hooks" are being added to React, which allow an individual to keep and make use of state on a functional component, as well.

4.  Describe state.

State is data that is kept on the component.  It is private and fully controlled by the component, but can be passed to other components through props.

5.  Describe props.

Props is data that is passed to a component when the component is created.  It can be access in a similar way to state, but props are immutable and cannot be changed, whereas state can be changed through use of the `this.setState` method.