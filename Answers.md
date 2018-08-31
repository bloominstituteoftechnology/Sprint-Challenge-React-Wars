# Answers

1.  What is React JS and what problems does it try and solve?
    * `ReactJS` is a JavaScript library primarily used for building user interfaces and the front-end aspect of applications. It lets you make UIs using independent, reusable modules called components. 
    
    * React is useful when it comes to optimization. DOM manipulation can be very slow with large applications. Since everything is split into independent components with React, if something needs to get updated, only that component will get refreshed, and not the whole page. In other words, only components whose state changes will get re-rendered. The main purposes of React are to be fast and scalable.

2.  What does it mean to _think_ in react?
    * `Thinking` in React usually means thinking about how you can break down an app into individual components, and connect them all in a component hierarchy. It means thinking about which components should have a state and which shoudn't. It means thinking about where your state should live and how it evolves over time.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    * A `functional` or presentational component concerns itself with the UI or the presentation of static data. Its concerned with the way things look and needs no access to a state. It is basically just a JavaScript function, and doesn't have an instance as it just acceps props and outputs a piece of a virtual DOM.
    
    * A `classical` or stateful component is concerned with the manipulation of dynamic data and has access to a state. A class component extends the React component class, from which it inherits features like lifecycle hooks and instances of it are created to internally manage its state.

4.  Describe state.
    * The `state` of your component is where the data lives. A component with access to a state is able to mutate the state, and thus change the data of the application.

5.  Describe props.
    * `Props` are pieces of data received from a parent component. This is static data that is fixed and cannot be changed by the child component.
