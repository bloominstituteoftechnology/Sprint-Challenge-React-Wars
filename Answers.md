# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    React JS is a JS library that makes building user interfaces easier. React JS is made of components and React elements that render whatever the developer wants. XML allows you to create HTML-like code right in React JS. Components are each independent of each other unless imported into another one.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    React Component Lifecycle goes from mounting and unmounting components and when a component gets new data. componentWillMount() and componentDidMount() allows us to set states and is when a component is added to the ReactDOM. componentWillMount() renders JSX to a <div />. if componentDidMount() is called, it looks for data to request and brings it into the State so then we can return it (render). Props and State sees what a component renders and how it behaves. setState updates the state.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class/Stateful components have a state that gets initialized in the constructor. Functional/Presentational components are stateless JS functions. 