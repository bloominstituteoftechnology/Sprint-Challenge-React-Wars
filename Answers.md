# ReactJS

## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
* React is an open-source, component based front end library responsible only for the view layer of the application. ReactJS differs from other frameworks because a React application is made up of multiple components, each responsible for outputting a small reusable piece of HTML.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
* Lifecycle methods are to be used to run code and interact with your component at different points in the components life. These methods are based around a component Mounting, Updating, and Unmounting.
* `componentWillMount` This function can be used to make final changes to the component before it will be added to the DOM.
* `componentDidMount` The component has been mounted and you are now able to access the component's DOM nodes.
* `componentWillUnmount` This method is called before a component is unmounted from the DOM.
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
* Stateful components have a state object that can be updated with the `setState` method. The state must be initialized in the `constructor` before it can be set.
* Functional components are smart components that hold state but render dumb components that simply receive props and return HTML as JSX.
