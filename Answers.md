# Answers
 
 1. What is React JS? How does it differ from other JavaScript frameworks?
-
React JS is a JavaScript library that helps to build efficient UI. It brings structure to the code to make development much more efficient in the future for other developers who might look at your code and expand on it. It differs from other JS frameworks in that React is not a complete framework - it's a library - a very powerful library, but just a library nonetheless. 
 
 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
 
a. Mounting - Component[Will/Did]Mount, create constructor, create and return elements

b. Updating - update state based on props (current standing)

c. Unmounting- final DOM manipulations
 
 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are exactly what they sound like:  functions! It accepts [props] as an argument and returns some React JSX. They are the epitome of K.I.S.S:  Keep it Simple, Sam. 

4.Briefly describe PropTypes and what we use them for when building react applications.

it's a typechecking tool that helps you to debug to make sure values returns or compared are the correct type of those values (i.e. whether they are string or number).