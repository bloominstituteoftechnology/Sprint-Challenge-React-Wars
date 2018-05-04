# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    * React is a JS library for creating UIs. It's different from other JS frameworks in that it uses its own syntax -JSX. 


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    * React Component Lifecycle necessary is necessary for React apps to make API requests and then render based on the data that was received.
    * 3 Lifecycle methods
        1. render: when called it returns a piece of the DOM
        2. componentDidMount: is called as soon as the virtual DOM is loaded to pull in data to our app.
        3. componentWillUnmount: Cancels any outgoing network requests, or remove all event listeners associated with the component


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    * Class/Stateful component is used whenever we need a component to have state. 
    * Functional/Presentational component is used whenever our component doesnt' need to have state.
