# Answers

1.  What is React JS and what problems does it try and solve?

Answer: React JS is a javascript library for building user interfaces. It was built by facebook to help solve some of the major problems the team was facing when dealing with complex state. It produces easy to use UI with reusable components that manages and passes state data around an application.



2.  What does it mean to _think_ in react? 

Answer: breaking down the react application into a repeatable process thinking about how react works and what it needs to function
   ( 1. starting with a mockup 2. breaking down into different component hierarchy , 3. building a static verion , 4. identify representation of user interface state, 5. identify where state should live, 6. visualize data flow )



3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Answer: A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.  A class component requires you to extend from React.Component and create a render function which returns a React element. Class components manage and can pass there own state.



4.  Describe state.

Answer: state holds information about a component, state can be updated making the components "react". we use setState() to change state.


5.  Describe props.

Answer: props is an {object} "property" or data that can be passed around as an argument to components. when passing state data from one component to another we use props.