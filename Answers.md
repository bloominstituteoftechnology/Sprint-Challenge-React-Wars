# Answers

1.  What is React JS and what problems does it try and solve?

React is a Javascript library for building User Interfaces. 

The problems React JS tries to solve are 

1) Expensive DOM manipulation operations for apps with reoccuring state changes. When a page is rendered using React, the DOM tree structure is stored virtually and because of that,the minimum number of DOM operations are needed to achieve a new state. This is cheaper and also improves website performance. 

2) Bugs that result from programs being composed of objects that all have their own state. With React the app state is constrained in a single place and is made of stateless functions that react to the state changing and then send their results to React, which re-renders it. 

2.  What does it mean to _think_ in react? 

Thinking in React means to first Break the UI into components and subcomponents, then to arrange the components into a hierarchy, thirdly to build a static version of the app with React, build components that reuse other components and pass data using props. After that would think of the minimal set of mutable state that the app needs (Use DRY),To make the UI interactive would then use state to trigger changes to underlying data model. Then identify which component will own the state. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful component can manage state while functional components only receives props from the parent component and can not manage state. Functional components are concern with how data is presented on the page while stateful is concerned with how things work on the page. 

4.  Describe state.
State is reserved for data that changes over time. State determines how a component renders and behaves. It allows for dynamic and interactive components. It is private and fully controlled by the component it was declared in. 

5.  Describe props.
Props are a way of passing data from parent to child. Props are set by the parent and they are fixed throughout the lifetime of the component. 
