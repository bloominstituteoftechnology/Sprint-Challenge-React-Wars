1-What is React JS and what problems does it try and solve?
React is a library used to build single page applications that update specific parts of the display quickly without the need to refresh the entire page.

What does it mean to think in react?
Thinking in react means understanding how to break your project up into small components that can render independantly from the rest. We do this for maximum code reusibility and scalability.

Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class/stateful component is typically at the root level of your component. All other components will branch off and use props to pass data down the tree, and events linked from the Class to change the state of the entire app.

Describe state.
State is the live storage object on the top level component used to store central app wide variables and data

Describe props.
Props are the way we pass data from the main App component to the components that need them. We pass variables, data, and handler functions (event listeners able to update state of App from lower components in the tree)