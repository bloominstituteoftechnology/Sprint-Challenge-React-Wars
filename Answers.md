# Answers

1.  What is React JS and what problems does it try and solve?
  React JS is a library of user interface components. It makes building out complex and powerful web apps much easier by abstracting away a lot of the painful process of selecting DOM nodes. It also makes handling user input much simpler. React is based on the idea of reusable components, self-contained pieces of code that can be easily used over and over. 
1.  What does it mean to _think_ in react?
  We want to compose web apps with smaller reusable components. Each component should have one thing that it does. Any new features you want to build should be a new component. 
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  A functional component is just an ordinary JavaScript function, that takes in props as an argument and returns a react element. A react class is an extension of React.Component, and has access to state. Functional components don't have access to state, except passed down as props. React classes have access to all of the abilities of React.Component, which functional components do not. 
1.  Describe state.
  Data that changes over time. Data that comes from user interaction with the app. The app uses state to tell the other components what to do, based on changes in state. 
1.  Describe props.
  Props is an object that contains properties, that is associated with a React component. Props properties are immutable. But some props properties can derive some of values/data from state, which itself is dynamic. But the reference to that state within the component does not change, only the data stored at that reference point in state. This is done to ensure that React components remain stable. 