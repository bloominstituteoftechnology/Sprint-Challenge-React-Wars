1. What is React JS? How does it differ from other JavaScript Frameworks?  
- It's a framework for creating interactive user interfaces. With React you use components, which return JSX, to make up the UI.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.  
- componentDidMount() runs right after the component is added to the DOM.
- componentWillUnmount() runs right before a component is deleted from the DOM
- componentWillMount() runs right before the component is rendered/ added to the DOM. 

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.  
- A class component is similar to a class in JS. Class components have a state, which holds all of the information about that component inside of it. With a class component, you also have the ability to make methods within the component to interact with the state.
- A functional component will take in props and apply them to the JSX that's being returned. There is no state in a functional component, it just returns the JSX for the component.