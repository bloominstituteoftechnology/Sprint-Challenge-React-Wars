# Answers

1.  What is React JS and what problems does it try and solve?
React is a javascript library(not a framework) that attemts to solve the problem of building ui's(user interfaces) in a quick, and scalible way while abstracting away some of the more difficult aspects of interacting with the DOM (and its rendering slowing side-effects). It does this extremely well which hasbrought on mass addoption despite the somewhat steap learning curve. React also uses jsx to more easily sustitute the use of html, or xml. It also uses webpak and or babel for compatibility with older brouers, and non-early-adopters.
We will be spending a lot of time in React from here on.

1.  What does it mean to _think_ in react?
it means to think in the same component file structure and deconstucting the project section by section into its natural hierarcchy using the single responsibility principle.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.


You only need a class component for pplication of state and/or the lifecycle methods like componentDidMountand and life cycle methods other than the render function.Container Components handle behavior and state only in most sercumstances.

For everyting else functional component can be used. And this will make the program run just as well.Presentational Components use only Functional Components conventionally, and only concerns the U i aspect of the seperation of conserns.




1.  Describe state.
The stat is an objest inside of the constructor function that determins how and when the constructor component will render, re-render and its general behavior. only components that have state can be interactive, and dynamic. Otherwise they will be considered "dumb" functional components. 

1.  Describe props.

Most components can be customized when they are created, with different parameters. These creation parameters are called props. props allow as to pass state to componnents outside of the constructor function. 
