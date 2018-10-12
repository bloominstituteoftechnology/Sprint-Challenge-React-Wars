# Answers

1.  What is React JS and what problems does it try and solve?

    React is a library to build large programs quickly and with easy to use syntax. It has a large community with lots of support and counless examples to assist your own code base. It uses Javascript, and thus makes it a logical extension of basic JavaScript.

1.  What does it mean to _think_ in react?

    React uses a Virtual DOM engine, that does the heavy lifting. When building your code, you need think in terms of Component Hierarchy, a Static Version, Representation of UI State, Where the state should live, and Inverse Data flow and how it relates to this Virtural DOM.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    The largest difference is Syntax, A class component is just a vanilla JavaScript function that accepts props and returns a React element. A Function component requires you to extend from React.Component and create a render function, and then that returns a React Element. A Functional component is required to have State. You can use state with a Class Component you must lift or pass down the state though.

1.  Describe state.

    State is a changeable piece of data that is internal to a component. State is most commonly used for interactive components.

1.  Describe props.

    Props are Properties. They are unchangeable pieces of data that can flow from the parent to the child. Props allow reusable code.
