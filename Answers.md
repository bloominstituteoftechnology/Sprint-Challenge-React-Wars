# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    React is a Javascript library that allows the renders HTML through a tree of designed components and data flow.  React uses a virtual DOM to identify changes in state and determine what is rendered on screen.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    React components have lifestyle methods that control what happens a component mounts, unmounts, updates, etc.
    
    componentDidMount() - runs after component output is rendered to DOM.
    componentWillMount() - used in app config in root component.
    shouldComponentUpdate() - controls exactly when a component will rerender.
    

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class/Stateful components are able to maintain state and render HTML based on changes to state while Functional/Presentational components do not maintain state and are used to display said component.