# Answers

1.  What is React JS and what problems does it try and solve?

React JS is an unopinionated JavaScript library for creating User Interfaces and Specializes so that it can do one thing really well. React Solves a problem of high data load in modern web applications by making use of a virtual DOM and only rendering the changes in state. React gives us a methodology where we can greate modular and succint applications very fast and develop extreemely scaleable apps that can be built upon in a modular way.

1.  What does it mean to _think_ in react?

To think in react is to lend yourself to the modularity and component based paradigm and methodology that react offers. and to keep withing the DRY principals that its nature offers. In doing so we must obey a single responsibility principal where each component has a single responsibility and adheres to that trait. If a component starts to do more than one thing we should decompose it in to seperate components to modularise the task at hand. React Allows us to do such things with constructs such as Components, State and Props. these are the general principlaization of the react ethos as I see it.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components are an encapsulated item that can hold the state of an application and have logic and methods to act upon that state. Stateful components hold the state of the application. Were in contrast functional components are used for presentation of data. they can be passed data via props and call functions and manipulate the return values of the data that gets passed to them. but they are usually thought of as dumb components (this is not a blanket term as functional components can hold business logic but that is not the entended design or best practice in a React JS application).

1.  Describe state.

State is, as the name implies the storage of the applications current state. It is seaminglt mutable but we dealwith it in a slightly immutable way via a setter called setState and we pass it an object with state changes thus it updates the current state to be what we have told it to be.

1.  Describe props.

Props are akin to arguments in a function. thus they are data items in an object. these data items can hold variables / properties and functions. The are immutable in effect since they are litterally considered arguments to the component on invocation.
