# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a front-end library developed by Facebook to try and solve the way data interacts by updating and rendering just the right components when your data changes.

1.  What does it mean to _think_ in react?
To-think-in react means to think of each section of the UI as a component hieracrchy and build a static version of react. Then you identify the minimal set of mutable state
your app needs and identify where your state should live.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components is just plain JS taht accepts props as an argument and returns a react element. Class components requires you to extend from React.cocmponent and 
create a render function which returns a react element. Functional component does not have it's own state.

1.  Describe state.
State is similar to objects which contains data that changes over time. 

1.  Describe props.
Props stands for porperties and are a way of passing down data from parent to child and should not be changed.