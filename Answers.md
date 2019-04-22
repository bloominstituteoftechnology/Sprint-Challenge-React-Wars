# Answers

1.  What is React JS and what problems does it try and solve?
 A JavaScript library that focuses on building user interfaces.

1.  What does it mean to _think_ in react?

A series of steps where you break down a UI into smaller components and then create a static version of React with only a static version then identify what is needed in the state and where the state should live in. After this, is when you try to pass data inversely, meaning from child to parent.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Functional/Presentational component is just a javascript function. They take in optional inputs called props and try to render it in the virtual DOM. A class Class/Stateful component is different because it is able to hold State which is able to be manipulated through setState, which would change the data being passed in.

1.  Describe state.

It is an object property of the component and its scope is limited to the component it lives in. A component can initialize and update its state whenever needed and the state of this component usually ends up being props of the child component.

1.  Describe props.

Props are accessible data passed down from a parent component to a child component. It is immutable and top down, meaning the parent component can pass on whatever data it wants to its children as props but it can't be the other way around. Also, the child component cannot modify the prop.
