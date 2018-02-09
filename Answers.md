## Answers
1. What is React JS? How does it differ from other JavaScript Frameworks?
  - It enables you to blend JavaScript with CSS and HTML.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
  - React automatically tries to run certain things in order. For example, one of the first things that it runs is the render function. In order, they run:
    1. shouldUpdate
    2. willUpdate
    3. render
    4. didUpdate
    5. willUnmount
    6. willMount
    7. didMount
    8. willReceiveProps
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
  - A class component has state. It still recieves props, like a functional component, but if you aren't manipulating state, then you should use a functional component. This is the main difference.