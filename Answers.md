# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a Javascript framework developed by Facebook that tackles the issue of updating the DOM dynamically with lots of data very quickly. It makes it so the entire webpage doesn't have to refresh each time a new piece of data is brough into the application.

1.  What does it mean to _think_ in react?
You think about an application and all of the separate components that need to come together to make that application work properly. You must also think about where you need to store the state of your application and how you may want to use that to dynamically change your components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are just Javascript functions, whereas class components are stateful and can be affected by lifecycle hooks. Functional components can, but don't have to, take in props but they have no state.

1.  Describe state.
State is an object that is owned by the component in which it is declared. That component can initialize and use/update the state component whenever necessary.
1.  Describe props.
Props are the values passed into a function. Props are immutable and come from the top-down. Meaning a parent component can pass props down to a child, but a child should not pass props back up to the parent component.
