# Answers

1.  What is React JS and what problems does it try and solve?

    React is a UI JS library that allow us to build complex applications broken in pieces of reusable code called components. React's main objective is to render UI. 
    The problems that React tries to solve have to do with complex state. For example, for big applications like Facebook the data constantly changes and so the DOM has to be constantly updated taking on a lot of performance power. React solves this problem by means of the virtual DOM. When a page is rendered using React, the state of the DOM tree is stored, and when new updates are made it does a diffing between the old and the new one and only updates the ones that have changed. 

1.  What does it mean to _think_ in react?

    It means breaking a big application in parts or components. In order to decide what is going to be a component, one has to keep in mind that the component has to do only one thing.

1.  Briefly describe some of the differences between a Class/Stateful component and a                 Functional/Presentational component.

    Class components accept state, functional does not. 
    Class components have more features than functional. While functional components only takes props and returns a react element, class components takes in props, extends from React.Component class, has a constructor, calls super() and it also has a render method that renders the new state everytime the components are changed.
    Functional/Presentational are usually linked to the looks of the application and decoupled from the behavioral part of it. On the other hand, Class/Stateful are usually linked not only to the presentation and looks of the app but also to the way it is going to behave.

1.  Describe state.
    State is an object that contains the information that will be rendered in the application.
    State is mutable. It can change.

1.  Describe props.
    Props is also an object that contains atributes that will be passed around in a React application 