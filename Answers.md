# Answers

1.  What is React JS and what problems does it try and solve?
React is a UI component library that aims to solve the problem of managing large amounts of data without bogging down functionality.

1.  What does it mean to _think_ in react?
Thinking in react means to look at something and see how it is comprised of pieces of a whole. 
Such as a puzzle is many pieces, when you put it together you have one big picture. 
How these pieces fit together and are related is part of the process. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class components usually have state (but can exist without it); functional components are stateless and offer more features/functionality.
The main reason you would chose one over the other, is that Class components are able to have state. 


1.  Describe state.
State is and object where all the data lives that your components can access; it's used to keep track of information. 
State lives on the parent and is passed down to child components via props. To change state, you must use setState().
State can not be mutated directly but can be changed using setState() method. It's scope is limited to the component it lives on.

1.  Describe props.
Props stands for properties. These properties are passed down to functional components via state as 'props'.
 Props are immutable but can be updated via state when using setState().
