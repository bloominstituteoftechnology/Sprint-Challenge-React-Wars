### Questions
1.What is React JS? How does it differ from other JavaScript Frameworks?

* React JS if a front-end framework that builds UI's. It differs from other JS Frameworks like Angular that are end-to-end frameworks that handle the back-end as well as the front-end.

2.Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* React Component lifecycle methods handle rendering a component, updating a component, and if necessary removing a component.
  * ```render()``` displays component onto screen
  * ```componentDidMount()``` runs some behavior after the component has been rendered to the screen
  * ```setState()``` update a components local state.

3.Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* A functional component strictly returns or renders components to the screen. A Stateful component is an es6 class, and is able to handle events, and user interactions with the UI by manipulating it's local state.

4.Name the three arguments that are passed into the React.createElement() function?

* React.createElement receives a type, props object, and children, which are are property on the props object.