# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is a library, not a framework. It has a "virtual DOM" and stores all data in the "state". It also has JSX, a feature that allows you to easily write HTML inside a JavaScript file.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The React lifecycle goes: Mounting -> Updating -> Unmounting. 
* In the mounting phase, there is a lifecycle method called `constructor()` which is where the state is initialized. 
* In the mounting and updating phases, `render()` can be called. `render()` is required for React to work. It is the method that returns the DOM elements to be displayed.
* Another method in the mounting phase is `componentDidMount()`. This method allows you to only execute some code if the component successfully mounted. It is similar to the `onload` event.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Class/Stateful component has its own state (data storage) which will update the DOM when it is changed. Functional components instead have `props`, which are read-only pieces of data that are passed down from the parent component.

4. Briefly describe PropTypes and what we use them for when building react applications.
PropTypes allow you to do type-checking in the development phase. It allows you to be sure that data your components are given is valid.