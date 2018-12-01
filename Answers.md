# Answers

1.  What is React JS and what problems does it try and solve? 

Component based JS that renders the change of state of elements in webpages and applications. Simple designs can be changed into complex, interactive UIs

A UI component library used to build User Interfaces. Our code is organized in components. The virtual DOM allows us to offload the work of our DOM library.

2.  What does it mean to _think_ in react?

To be mindful of how components should be used and interact with other components to perform actions.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful components maintain internal states and onced changed can render those states. functional components are passed into stateful components and have their states changed by an event. 

-A functional component returns jsx, takes in props as a parameter and displays them. A class component is a javascript that extends the react .component base class and can have state added to them.

4.  Describe state.

An elements action or appearance that can be changed and rendered by a component, depending on an event.

-The heart of the application, all of the data passed around on props. Never updated directly, setState updates a components state.

5.  Describe props.

input data that can be changed depending on the state of a component.

-Object that gets past from component to component