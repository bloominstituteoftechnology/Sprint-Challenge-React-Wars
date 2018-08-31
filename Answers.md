# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a JavaScript library that allows applications to be more scalable by making it easy to build small components which can be reused over and over again, and which are dynamic (meaning that they can update given new data);

1.  What does it mean to _think_ in react?

    Thinking in React means being conscious of the flow of data within your application, from parent to child.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class components extend from a base React.Component and have access to the methods of the base component, including render() and state(). The state method allows data to be accepted by the component, which can make class components more dynamic. Functional components do not have state. They are often children of class components.

1.  Describe state.

    State is the object on a class component in which the data is stored.

1.  Describe props.

    Props on components are, unlike state, immutable. They get data passed down from state.
