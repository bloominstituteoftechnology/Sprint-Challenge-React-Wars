# Answers

1. What is React JS and what problems does it try and solve?

React is a UI component library. It was created by the team at Facebook to solve problems they were having in regards to scaling to billions of users. It is infinitely scalable and reusable. React is a library and not a framework. It utilizes a modified version of JavaScript called JSX to allow HTML style markup of text. 

2. What does it mean to _think_ in react?

It means to visually break down a design into a series of components that can be built with React.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful components are made to have data pass through them, they always have a constructor and a state property that holds the data. Presentational components, as there name suggests are only for used for visual purposes and pass down properties to each other hierarchically, but do not handle any data.

4. Describe state.

State is mutable. It is owned by the component where it is declared and its scope is also limited to that component. State has data passed in and out of it.

5. Describe props.

Unlike state, props are immutable and also available outside the scope of the initial component they were declared in. Their availablility to other components is structured in a top-down hierarchy.