# Answers

1.  What is React JS and what problems does it try and solve?
React is a javascript library(not a framework) that attemts to solve the problem of building ui's(user interfaces) in a quick, and scalible way while abstracting away some of the more difficult aspects of interacting with the DOM (and its rendering slowing side-effects). It does this extremely well which hasbrought on mass addoption despite the somewhat steap learning curve. React also uses jsx to more easily sustitute the use of html, or xml. It also uses webpak and or babel for compatibility with older brouers, and non-early-adopters.
We will be spending a lot of time in React from here on.

1.  What does it mean to _think_ in react?
it means to think in the same component file structure and deconstucting the project section by section into its natural hierarcchy using the sngle responsibility principle.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
You only need a class component when you a) need component state or b) need the lifecycle methods such as componentDidMount etc. Otherwise a functional component can be used in that instance.
Presentational Components use Functional Components, and only concerns the UI.
Container Components use Class Components, and concerns state and behavior.



1.  Describe state.
The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

1.  Describe props.

Most components can be customized when they are created, with different parameters. These creation parameters are called props . 
