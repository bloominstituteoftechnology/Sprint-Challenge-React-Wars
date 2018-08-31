# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a popular library for building applications. It is one of many paradigms for writing large scale application software but its popularity
is so widespread that it is one of the most in-demand skills today. The primary problem React attempts to solve is the fact that it is taxing to
perform DOM operations, doing this via a virtual DOM that updates only the pieces of the DOM hierarchy that have been changed. It is also not an
opinionated library, meaning that developers are free to use vanilla JavaScript and other JavaScript libraries as they see fit

2.  What does it mean to _think_ in react?

First and foremost, thinking in React means that a developer is able to envision an application as a set of components with a particular hierarchy.
An application that appears as a single entity, such as the calculator app from this week, is in reality a set of components created and brought
together through React. Next comes the ability to think about the static version of an app; that is, an app that displays its UI correctly but has
no interactive functionality. After this, a developer should be able to think about the state implementation necessary to achieve functionality and
finally set up a stream of data flow to complete the app.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A stateful component:

- Has the capability to manage its own internal state and implements React.Component
- Has a set of functions that can be overridden to use different operations
- Classes are used when state is needed, or when component lifecycle methods are needed

A presentational component:

- Has no internal state, therefore is not involved with interactivity
- Is used to build the UI
- Is the correct choice when only props are needed

4.  Describe state.

State is an object inside of a component that determines how it renders and behaves. It is used for functionality since setState can be used for data
that is subject to change, as opposed to props which is used solely to store fixed data. Since state data should be seen as private (fully controlled
by the component it is inside of), it functions as a sort of internal data set that affects how components are rendered.

5.  Describe props.

Props are parameters of components that can be customized when the component is created, but they cannot be changed during the use of the program. The
only way to update prop data is to change the parameter itself, meaning that props cannot be used to store any data that will change. Props are thus
not used to implement functionality, but their information can be used to create static screens. This can be particularly helpful while building the
UI of an app before functionality is added.
