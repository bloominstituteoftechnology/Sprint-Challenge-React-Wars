# Answers

1.  What is React JS and what problems does it try and solve?
Answer: React is a javascript library that helps to develop large scale application effectively and quickly. For large web applications with continuously changing data like pinterest, twitter etc..need to offload data from their DOM and this is where React is super helpful.  

Each element’s DOM will be updated instead of the entire DOM when changes happen to a particular element. React does this using it’s engine called Virtual Engine and this helps take load off the DOM and scale applications rapidly and effectively.

1.  What does it mean to _think_ in react?
Answer: Thinking in React is breaking down the UI into smaller components and setting up a component hierarchy. Each new component does one thing and it does it well. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Answer: React declares components in 2 ways-functions and classes. Functional components are static and hence stateless. Class/Sateful components are dynamic and handle any data that might change. Depending on whether you need state on a component oen can choose between Class or functional component. If you need access to this or methods use Class, if not use Function.  

1.  Describe state.
Answer: In React component can have states. State can be any information related to the component that we want to set or update. When the state of a component changes so does it's UI.

1.  Describe props.
Answer: React components when created can be customized using various parameters. These parameters are called props.
