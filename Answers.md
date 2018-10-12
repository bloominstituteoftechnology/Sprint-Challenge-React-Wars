# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a Javascript library mainly used for creating user interfaces. It allows easier maintenence, as compared to native JS, of complex UI components. Due to one of its features, Virtual DOM, it doesn't limit performance unlike other libraries and frameworks. Due to JSX, it allows easier integration of HTML tags and logic.

1.  What does it mean to _think_ in react?
    When desiging a react application, one should keep in mind that components transform data into UI interfaces. One should organize the UI component hierarchy. Moreover, decide where the state will exist and how would the data flow from main component to sub components.

1.  Briefly describe some of the differences between a Class/Stateful component and a    Functional/Presentational component.
    Functional components are components that return some presentational data and have access to data flow through props object. They lack the state that stores the main data.
    Class components on the other hand have access to state object which allows to keep track of data and its changes through out the lifecyle of application. Class components carry lifecycle methods aswell. Class components initialize with class keyword, with the option to have a constructor and super method.

1.  Describe state.
    state is an object that determines how component have access to data and how they change their output over time. state is only available to class components.

1.  Describe props.
    props refers to properties object of a component. props have access to data passed down by other components.
