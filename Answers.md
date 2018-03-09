# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    React is a front end framework designed to build responsive apps for the web that update their state without pageloads. 


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    The React Component LifeCycle is the 8 states that a component goes through as it is created and used. These 8 methods are used to attach blocks of code that trigger when it hits that part of the cycle. didMount is used after the constructor and after willMount (which is almost never used as it does not have access to DOM elements) and can be used to setState. render() is where you attach the HTML tags and format how you want the component to be viewed in the app. willUnmount is used to delete eventListeners and close network connections when a component is being deleted.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A class component has different states that it goes through and also can pass props on to a child component, while a functional component is standalone and has one function without multiple states.