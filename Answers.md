# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JavaScript library that provides a level of abstraction called virtual DOM. This virtual DOM checks against the actual DOM and reconciles its differences during its 'lifecycle'.

1.  What does it mean to _think_ in react?
Thinking in react is taking state into consideration, and deciding which functions need access to its own state or lifecycle methods.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Class/Stateful component is one that needs to have access to state data in order to re-render if that state is changed. A functional component can be called further down the inheritance chain and does not need to re-render every time it is called. 

1.  Describe state.
State is data that is rendered. When that data is changed, due to reactive programming, the DOM is re-rendered after the virtual DOM is done with its reconciliation. 

1.  Describe props.
Props are similar to HTML attributes, but they are initialized in the return statement inside the render method in the Component class using JSX. They can then be called by the Constructor function tagged in the JSX and the 'attributes' defined inside the tag are the props that can be passed through. These props can then be deconstructed and used within the function they are inherited to. 