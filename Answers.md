# Answers

1.  What is React JS and what problems does it try and solve?

 -- React is a library for Javascript that is used for creating user interfaces with many users that need to access data at the same time. It's different from other Javascript frameworks because it only updates the elements and components that change, as opposed to refreshing the entire page.


2.  What does it mean to _think_ in react?

-- Thinking in React means taking a proposed app/solution, and breaking it up into a series of components. Components can be defined for both visual and functional reasons, and as you go through this process, it will help you develop a model for how the program will work, how it will be represented logically, and how this can be efficiently communicated visually.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

-- We only need Class components when we want to hold a state or when we want to use React Lifestyle components. Functional components are much simpler and only use one render method, but they can not hold a state or Lifestyle components.

4.  Describe state.

    --State is a special object property of a component in React, which keeps track of changing elements of the application. When state changes, it can be used to update the overall application by the virtual DOM if needed, by passing changes to props.

5.  Describe props.

    --Props are special properties for React components. It is an object that holds various initializing properties of the component. Some, like children, are built in by React, and lists the DOM elements/components nested within the component. Others are passed explicitly when the component is instantiated in JSX. A subcomponent's prop can be passed based on the supercomponent's state, which will cause the subcomponent to be updated if the state on which that prop is based is updated. Props do not change once a component has been created though. What really happens is if there is a state change, then a new component will be created with new props based on the updated state.
