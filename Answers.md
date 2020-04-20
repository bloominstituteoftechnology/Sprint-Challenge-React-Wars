# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

State is is an object of some data within a component. Every component can maintain its own state, and the ability to change the component's state allows us to add interactiveness for the user. When state on a component changes, then React re-renders the component to the screen.

1. Describe component state.

State is is an object of some data within a component. Every component can maintain its own state, and the ability to change the component's state allows us to add interactiveness for the user. When state on a component changes, then React re-renders the component to the screen.

1. Describe props.

Props are properties than can be passed down from a parent component to childeren components. They deliver information about certain pieces of data so that you can pass things like image links and name properties to various components.


1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?


Side effects are things outside of the scope of the function that is actually being executed which cause problems with your component. These side effects can create a lot of performance issues problems if not handled correctly. Dependecy arrays solve many of these side effects which cause many api requests to render over and over again to the dom.
