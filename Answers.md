# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a UI Component library allows developer to manage reusable components separatedly

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React Component Lifecycle is a loading flow of a component. Three parts: 

- componentDidMount: executes after render() completed
- componentWillReceiveProps: executes after prop is updated
- componentWillUnmount: executes after component is unmounted

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Class component provides a constructor and state object, use `this.props`
- Functional component does not have constructor and state, use `props`

4. Briefly describe PropTypes and what we use them for when building react applications.

- PropTypes are used to validate value type of each prop when it is passed down from its parent