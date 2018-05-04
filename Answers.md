# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a library that aims to make it  a lot easier to build UI. 

It gives us the opportunity to build and re-use a lot of our code in form of components. 
Also gives us an easy way of handling the state in our app.

Also, it is not a framework. Which makes it easier for us to implement differnt components into our app rather then being forced to use the ones
which came with an actual framework

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Lifecycle: init, mount (constructor), update (cDM f.e.), unmount (happens when props / state has to get updated to make changes possible)

cDM - there to set our state to a value that was not previously available. re-renders our virtual DOM 

render - returns JSX to our virtual dom. This function is the way to make anything show up.

cWU - re-renders the page if we either update the props or the state.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class / Stateful component has it's own "state" -> data. This means that it is able to have it's own methods and will also be able to manipulate it's own data. 

SFC - do not have their own data. They receive a copy of the passed props. They can also be passed methods of their parents. 