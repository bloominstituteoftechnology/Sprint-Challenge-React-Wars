# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library in javascript that allows developers to build interactive web pages, that quickly and efficiently renders exactly what needs to be rendered on the screen for users and also updates in real time when data is changed. 

1.  What does it mean to _think_ in react?

Thinking in react means, looking over or thinking about what it is you want to build and what would be the best way to do so using components.  How to break down each part and build it component by component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A noticeable difference between class and functional component is how they are written.  Functional components are written in plain javascript that accepts props as the element, while a class component needs to be extended from react.component, create a render function which returns a react element.  Also in functional components you cannot use state or setState as they are stateless while class components can.

1.  Describe state.
State is used when data is going to change as the component is being rendered and updated. State is where data that will change should be kept, such as tasks on a todo list.

1.  Describe props.
Props are set by the parent element and are fixed components. Props is where you can keep the data that will never change, like a header.  