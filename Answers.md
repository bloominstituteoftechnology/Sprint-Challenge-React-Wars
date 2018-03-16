# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React JS is a JavaScript library used to generate interactive UI elements on the DOM. React JS differs from other 
JavaScript frameworks on its emphasis on reusable, composable, stateful components to build up the DOM elements. React JS
is mainly the View layer in the MVC paradigm.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
constructor(), initialize this.state object database
componentDidMount(), populates this.state with data (external file or remote server) and delays call to this.state until data has mounted
render(), renders an html element on the DOM.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class component is able to store, pass, and update a data object (this.state) built by the constructor() method, 
in addition a Class component is able to render html elements via the render() method to the DOM. Functional components only have the ability to render html elements and to use data passed to them via props. The props that are passed to Functional components are read-only (immutable), thus limiting functional components to rendering something to the DOM.