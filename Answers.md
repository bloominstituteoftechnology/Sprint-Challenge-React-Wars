# Answers

1.  What is React JS and what problems does it try and solve?

    React is a JS library for building user interfaces.
    React is efficient, because it is using a Virtual DOM which only updates the elements that has been updated and does not
    re-render every parent element as the conventional DOM.
    By utilizing this library, we can build UI-s from small components.
    React life-cycle methods are allowing us to have greater control over the state of the application.

1.  What does it mean to _think_ in react?

    Designing the application build up from components that are not dividable into smaller components? 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class components have access to all the elements of a JS class, like the __proto__ and __prototype__ object and in addition it allows us to use the state object.

    Functional components are faster then the class components but it comes with less functionality. It does not have access to the state object directly, but only via props.

1.  Describe state.

    State is an object that stores the application data. This data then will determine how the application renders.

1.  Describe props.

    Is a way to send data from the parent elements to the children elements.