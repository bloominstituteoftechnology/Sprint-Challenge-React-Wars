# Answers

1.  What is React JS and what problems does it try and solve?
    1.  React JS is a Javascript library that allows us to create apps in a modular way using components and a virtual DOM to allow for more complicated apps to run smoothly.

2.  What does it mean to _think_ in react?
    1.  Thinking in react really just means to think about your app in terms of components and state.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    1.  In short, stateful components can hold state and presentational components have to listen to a stateful component through props to determine how it should be rendered.

4.  Describe state.
    1.  State is like the heart of a react component. It describes how the component and any of it's children should display when rendered. State is immutable which means you can't (or shouldn't) mutate it directly. Any changes in state are handeled through re-rendering.

5.  Describe props.
    1.  Props are attributes to components that can be used to pass down data from parent to child to display. They are defined where the component is called and utilized inside the component itself like a variable to allow it to be affected by the parent's state.
