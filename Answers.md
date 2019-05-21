# Answers

1.  What is React JS and what problems does it try and solve?  
React is a UI component library. It interacts with the DOM by first updating a virtual DOM that will then update the part that is different on the real DOM. It solves efficiency and makes the code more mangagable with reusability.

1.  What does it mean to _think_ in react?
Thinking in React means being conscious of the flow of data within your application, from parent to child.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class components have their own functions and state which can be mutated. Functional components don't have a state and are typically just using props and returning some jsx.

1.  Describe state.
State is data that we want to put onto our app. It is able to be changed based on our code using functions.

1.  Describe props.
Props is a just reading the state from the main app and gets passed to Children components so they can display the state. Props can not be changed.