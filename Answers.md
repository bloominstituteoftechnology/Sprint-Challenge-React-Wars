# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    ReactJS is a javascript library that controls DOM manipulation through its component system.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    I would describe the react component lifecycle as  mount, update, and unmount. As I understand it, the first step is to create a component and initialize it with componentDidMount(). At this point, you can update it with the .setState() method. The last step would be to theoretically unmount the component, but I don't believe we've done this yet.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    I believe the main difference is that class components can maintain a state and therefore be provided with updates. This is because class components create objects to be updated and used, while functional components tend to have less functionality.