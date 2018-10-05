# Answers

1.  What is React JS and what problems does it try and solve?
* ReactJS is a Javascript library that is mostly used for building interactive UI interfaces and the front-end aspect of applications. React solves the problem of constant DOM manipulation that slows down how fast information is processed. Through the use of a virtual DOM and components (individual, reusable modules), only components that have had state changes made to them get re-rendered.

1.  What does it mean to _think_ in react?
* Thinking in React usually means thinking about how you can break down an app into individual components and connect them all. It means thinking about which components should have a state and which shouldn't. It means thinking about where your state should live and how it evolves over time.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
* Classes can have state while functions can not. Functions are used more for presentation, while classes contain the logic of an app. If your app doesn't need state, functions provide a cleaner way to create your app, cutting down on code and complexity.

1.  Describe state.
* State simply represents the value(s) of the moving parts on an app at render. It is literally the data that will change on a Component.

1.  Describe props.
* Props are the immutable values passed down from state. The data that will not change on a Component.