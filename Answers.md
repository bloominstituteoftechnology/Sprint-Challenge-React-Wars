# Answers

1.  What is React JS and what problems does it try and solve?

    React JS is a versatile Javascript framework. It solves the problem of DOM operation performance when there is a high demand and high quantity of DOM operation change. React JS incorporates a virtual DOM that stores the momentary(state) DOM, and only updates parts of the DOM that has changed. In this way, DOM refresh are reduced and improves performance.

1.  What does it mean to _think_ in react?

    To think in react means to start seeing everything in an app or webpage as a box (or component)

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    a. Syntax - Where functional components use plain javascript language to pass props and return React elements, class      components must extend from the React.Component and create a render function to return a React element.

    b. Major benefit of the Class Component calling the React.Component is the setState(), which gives the class component its own state.

    c. Class Components also have Lifecycle Hooks, which functional components do not.

    d. Obviously, as stated in the question, functional components are presentational, while class components are "stateful"

1.  Describe state.

    A defined set of properties that determines how a program would behave in any situation. An original DOM that is compared to when a new update to the DOM is rendered.

1.  Describe props.

    Props can be made in a single component and reused in many different places, like a template. Props is short for properties, and it can be set in a parent component and used in different places.
