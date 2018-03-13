# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

* React is a JavaScript framework and library that allows for the construction of complex user interfaces.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* Each component has lifecycle methods that can be overridden to run code at certain times.
* render() : looks at this.props and this.states, renders 
* componentDidMount() : invoked after a component is mounted.
* componentWillMount() : invoked before a component is mounted.
* setState() : updates the UI, re-renders component and its children with the updated state

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* Class/Stateful components are components where the state is initialized in the constructor.
* Functional/Presentational components are easier to write and understand than class components, for they are usually shorter in character count, and cannot use lifecycle methods.

4. Briefly describe PropTypes and what we use them for when building react applications.

* PropTypes is a property that can be assigned to a component that checks for data type validity. Helps with debugging.