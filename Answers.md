# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a user interface library that tries to solve the problem of re-usability and scale by breaking everything down into components that can be individually separated and compartmentalized and creating a virtual DOM that only updates and renders what needs to be updated, solving the problem of having to render the whole page which results in much faster upload speeds.

1.  What does it mean to _think_ in react?
Thinking in React is the idea of breaking everything down to its own component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A functional/presentational component is simpler and 'stateless', you can access props, but you cannot access state.
You cannot use lifecycle methods and you do not have to use a 'this' keyword, it focuses solely on the UI and not the behavior of the app. A class/stateful component is 'stateful' and can access state and lifecycle methods which the former cannot. It extends from React.Component and you have to use 'this' keyword to access props and other functions declared inside the component.
1.  Describe state.
State is a way to control the behaviour of an object by making it dependent on its 'state'. Anything that deals with user interactivity deals with state.

1.  Describe props.
Props (stands for properties) is how we pass data down from state to the rest of our application. It makes components re-usable by giving components the ability to recieve data from the parent component in the form of 'props'.