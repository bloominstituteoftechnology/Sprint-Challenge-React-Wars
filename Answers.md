# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

I'm not too knowledgeable about the other Javascript frameworks. However, I believe most of them adhere to the MVC concept. Angular, for example, separates Model, View, and Controller. The Javascript code is injected into the html through directives. React, on the other hand, is used mostly for just the View. All of the DOM can be represented in just a Javascript file, by using JSX.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle illustrates how a React component changes it's behavior throughout its life span. The lifecycle starts with calling componentWillMount, which is actually called server-side. Then componentDidMount gets called, and it's only called AFTER the first render call. Then there's componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate (which actually updates the state of the component via its updated props), componentDidUpdate, and componentWillUnmount.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component has state. A Functional component does not have state, and therefore, its render is not dynamic. It's possible to know exactly what a functional component will render at compile time 100% of the time; this is not true for class components.
