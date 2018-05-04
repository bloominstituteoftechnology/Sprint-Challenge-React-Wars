# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
> React JS is a client-side JavaScript library that makes the use of a Virtual DOM that groups together multiple changes and does a single re-render to quickly update the actual DOM.

> React differs from other frameworks mainly because it is not actually a framework but a library. Unlike frameworks, who are concerned with MVC (Model-View-Controller), React is only interested in the **V** in **MVC**. React is also unopinionated in what other libraries, frameworks, and server-side language(s) you use.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
> render: Renders our data to the screen

> componentDidMount: Is called after the render method. Used to update state for data we would possibly not have on the initial render

> componentWillMount: Is called before the intial render.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
> Class/Stateful Components are components that have the ability to manage and change state.

> Functional/Presentational components only receive state through an object in the functions parameter, typically **props**, and uses that data to **present** something in that component.

4. Briefly describe PropTypes and what we use them for when building react applications.
> PropTypes is a small library we can bring in to React in order to check out data types being passed around from props. If the type does not match with what we expect then we get an error message from React.