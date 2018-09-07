# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a javaScript library that tried to solve the propblems of expensive DOM operations interms of time and performance. In DOM when an update is made the entire tee representation has to be rended again whereas ReactJS solves that issue by implementing a Virtual DOM that only renders the updated node or element.

2.  What does it mean to _think_ in react?

    It is to breakdown the UI into components with hierarchy, building static vesion, identify state and then identify whee the state should live, and finally to add inverse data flow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class/Stateful componenet have state object with key-value pars that can be manipulated with this.setState() method. They also possess a ender() method that renders functional componenets into the browser.
    Functional componenets are stateless and return JSX elements that are eventually mounted onto the render() method of a class App.

4.  Describe state.

        State is data that is either inputed by a user or comes from an API. State determines what a componet renders or how it behaves - meaning what methods are used to manipulate the state.

5.  Describe props.

     Props are object arguments passed into functional component that helps pass state to that componenet.