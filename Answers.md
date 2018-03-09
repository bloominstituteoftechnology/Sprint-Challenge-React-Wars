# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
   React JS is a popular javascript *library*. Libararies give the developer the control to call the libraries methods that do work then return control. A framework on the other hand calls your code after you insert it into the framework. ReactJS specifically uses the paradigmn of compartmentalizing things away as components.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    The React Component Lifecycle refers to how because React components use state to dynamically update they have a beginning, middle, and end of sorts. The methods to interact with the lifecycle are as follows:
   - ComponentWillMount() - is called before render, does not trigger re-rendering
   - Render() - returns JSX markup, props and state values are interpreted
   - ComponentDidMount() - called immediately after render, enables DOM manipulations and data calls

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   - A function/presentational component is akin to a self invoking function. It just returns out markup to be rendered. It does not have a memory (state).
   - A Class/Stateful component uses state to dynamically remember and update data.

4. Briefly describe PropTypes and what we use them for when building react applications.
   PropTypes are used to check incoming external data to make sure that it fits the correct type requirements to be used by our application. For example if your app renders out a string you don't want to be fed an array. A failsafe default can be put in place so that something like this would not break the app.