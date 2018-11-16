# Answers

1.  What is React JS and what problems does it try and solve?
    React is a JS library that uses reusable components to build user interfaces. React separates apps into small components that can be scaled into large apps.

1.  What does it mean to _think_ in react?
    Break an app down into small pieces. Build each piece into a component and then feed the components into the next parent until you have a whole app. A React app is layered. For example, the React Wars app as a whole is a page that displays cards that correspond to Star Wars characters. So you have an object, a character, that is displayed on a card. The card is one component. Then the card is fed into a list component that holds ALL of the card characters. Then the list is imported into the main App that holds all components and renders them on the page. 
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A class component holds state. A functional component does not have its own state, but it can use the state of another component through props.
1.  Describe state.
    State is an object that holds the output data that is rendered. It is managed within a Class component. A Class component can alter its state using setState().

1.  Describe props.
    Props are data that get passed to a component, similar to parameters. The component receiving the props cannot alter the props.