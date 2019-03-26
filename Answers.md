# Answers

1.  What is React JS and what problems does it try and solve?
    React is a JavaScript library that prioritzes rendering UIs; it solves a number of problems, by design. It coserves memory by selectively rendering updated components, rather than all components. It's more scalable than vanilla js for big or complex projects. React components are composed with reusability in mind. It's also flexible by being unopinionated about the rest of your stack.
2.  What does it mean to _think_ in react?
    Thinking is react means approaching a task using the workflow recommended by creators and proponents of react. it involves logically layering functionality - first deciding how to divide the mockup into heirarchical components, then composing a static app with the components and their props, and finally adding state.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Functional components have access to data through props and have a return function to render elements, but they lack sate, life cycle methods. They are referred to as presentational because their primary value is to present some piece of UI. Class components are stateful because they have access to state and life cycle methods. Although Class components seem undeniably more robust, it's good to use the right kind of component based on the task. Functional components are simpler to work with so it's better to use one if it doesn't need access to state directly.

4.  Describe state.
    A component's state is an object that contains data that can be updated to keep track of and display changes to the UI. The key here is that state is mutable.

5.  Describe props.
    Props are read-only data, in contrast to the mutable nature of state. Because of this defining characteristic, props are used to pass and display data that isn't going to update. 