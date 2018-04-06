# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React isn't a framework. It's a library used to build UIs more efficiently. As I understand the MVC model (from my previous RoR learning), React would be the View component to that pattern, tasked primarily with handling the presentation layer of the application. And now that I've written this, I realize I have a better understanding of it than I'd originally thought.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React Component Lifecycle basically consists of a 
- Render Phase, where the objects and components are mounted and assessed, and prepped for updating by receiving props from other sources--thereby changing their state, a 
- Pre-Commit Phase, when the DOM is accessible and changes can be made to the objects and components, and
- Commit Phase, where the DOM can be manipulated and updated by the results of the previous two phases and React's handling of these events.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component is an object that can change state as the Component Lifecycle executes, by being manipulated by React, and pushed into/onto the DOM.  A Functional/Presentational component is more of a "plain container" whose job it is to render as it is defined within the JS/React code.

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes is a library in React that enables typechecking of data to ensure that data types -- particularly user input data -- is of the type that is specified for the forms and fields in which it is collected. So for example, if we had to get a user's name, address, including the zip code, the zip code field would be set to only accept numbers, and the PropTypes would throw an error message if the user used alpha characters in that field.
