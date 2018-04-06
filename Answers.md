# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    ReactJS is a JavaScript library for building user interfaces specifically Facebook & Instagram with live
    interaction. It differs from other frameworks that it manages the DOM via a Virtual DOM & utilize a preset of defined components.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    The React Lifecycle spans the components initilization and mounting, updating States & Props, and unmounting.
    (3) Methods:
    Use of constructor is called before it is mounted.
    Render which returns components to the DOM. ComponentDidMount called per lifecycle and indicates that the component and its subcomponents have rendered.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    In a class component, we extend Component, have a constructor, which calls super(), and have state, which can hold the state properties that we give the component.
    In a functional component, we do not extend Component, do not have a constructor or call super(). Here, we simply take in some props, and return the necessary markup to be rendered.