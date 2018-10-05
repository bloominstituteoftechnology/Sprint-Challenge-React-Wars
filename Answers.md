# Answers

1.  What is React JS and what problems does it try and solve?
React is a UI library that is used to build applications that can handle lots of data. It uses components (small pieces of UI) that are pieces of DOM with their own data methods and handlers that we use React to manage. This became necessary as websites and applications grew in complexity. 

2.  What does it mean to _think_ in react?

To _think_ in React is simply to plan ahead knowing what your app will look like taking in consideration what your state will be and how it will live throughout user functionality. It is taking your app and breaking it down into reusable components that pass data down from parent to child and is as dry as possible. You make sure the data goes back as well to refresh the state. You start with a static state and implement the functionality afterwards. 
 
3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Class/Stateful component is one that is concerned with state. Functional/Presentational component is not concerned with state and is used mainly for displaying static information. 

4.  Describe state.
I think of state as the current view that the user is seeing or interacting with. The current data/view that is being represented or changed by the user. You can have this "state" change based on user interactions, timed events or not change at all (static website).

5.  Describe props.
<!-- Props are methods/functions that are available to a Component and can be passed down to the component's children (usually) or other components using the props term in React.  -->