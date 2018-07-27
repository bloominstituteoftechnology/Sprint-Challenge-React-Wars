# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a javascript library the makes it easier to compose user interfaces. 

2.  What does it mean to _think_ in react?
Thinking in React is all about breaking the UI into components, specifically a hierarchy of components. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. Some general rules of thumb:
If your component needs access to lifecycle methods or hold state, use a class. If your component needs access to this, use a class. Otherwise, use a functional component. Functional components are often referred to as stateless components, and class components are often referred to as stateful components.  

4.  Describe state.
Often thought of as the heart of the application. State is the data that our components can hold onto and pass around to other components. When a state updates so will our components making them reactive. State drives our applications - our components are driven by our views. We can pass state around from one component to the next using props.

5.  Describe props.
Props is short for properties. Often thought of as the blood of the application. State pumps the props throughout the application. Props can be passed as an argument to functional components. Props are immutable. We just pass them around and use them to display information.
