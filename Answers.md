# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a web-application programming solution created in order to break websites down into smaller, scalable portions called components. The issue that it attempts to solve is the issue of scalability and completxity.

1.  What does it mean to _think_ in react?

To think in react is to picture every individual part of a web application as a component composed of components and to build pages top-down or bottom-up. This means, basically, to make each "piece" of the page its own re-usable or scalable item and to build it with the "big picture" in mind first, or to have the components in mind first and then create a custom picture. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

functional: Components that have a simple function. Sets  up the user to interact with the web page in an act-and-respond format. Does not really "live", is "static" and uses passed in props but cannot use particular methods or the "this" keyword.

Class: Access to "State" via the "this" keyword, able to update in real-time (i.e. clock app) and access methods to make the component "dynamic"


1.  Describe state.

State is given by user input and affects what the component will render. ALlows the component to "update" itsel and the DOM, therefore, more dynamic user interactivity.

1.  Describe props.

Used to pass properties from one component to another. Information that typically does not ever change.
Kind of like "read-only" info for the component. 
