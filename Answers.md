# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    React.js is a JavaScript library. It is often mislabeled as a framework since it is so powerful. It can be used in conjunction with other frameworks. React uses a virtual DOM and programmers can set state on objects easily so users can interact with web pages or web applications.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    
    The React Component Lifecycle is a set of methods used with components to set their state and manage state.
    render() - this is what shows up on the screen.
    componentDidMount() - this brings in data and sets it up for use.
    componentWillUnMount() - this deletes a component and all its requirements, mostly used when moving to a different page.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class component - has state, uses the class keyword
    Functoinal component - basically a function that is more concerned about doing something than managing state. (e.g. using map() to pass elements into divs, then to a class component)