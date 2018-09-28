# Answers

1.  What is React JS and what problems does it try and solve?

React is a javascript library used to for creating user interfaces. It lets you brake up your complex UI's from small and isolated pieces of code that can be reused. We currently have very complex user interfaces today that are constantly interacting with ever changing data that has many users interacting with the DOM at the same time. React was made as a way to offload this state data that our apps use away from the DOM done by Reacts virtual DOM. React uses its UI components that concern themselves with their own individual part of the DOM to be updated and changed instead of constantly updating the entire DOM. This makes its applications more scalable while increasing performance. 

1.  What does it mean to _think_ in react?

While building web applications in react is it best brake each piece of the UI into its own component. A component should be something that should only do one specific thing. However, if that component starting growing it might be time to consider braking it down even further. This is so that one can take those peices and reuse them again and again. This helps build a Hierarchy. Also, react requires you to think about the current state of the application. To figure out where the state needs to go we need to understand what is supposted to be displayed. For example in our todo list homework we needed our state to be the todo list itself. Thinking in react is about state organizing your components and providing a flow of data.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.


Functional components are javascript functions. They Take an optional input referred to as props used to render UI. A functional presentational component is coupled with the view or how things look. Everything is has to do with describing what our UI should look. These components are reusable. Class components are javascript classes. A stateful class component always has state which gets initialized in its constructor. State is an object that is owned by the component to where is was declared and its scope is limited to its current component.  

1.  Describe state.

State is an object that is owned by the component where it was declared and its scoped is thus limited to the current component. However, a component can initialize its state and update it whenever necessary. When state is passed out of its current component is is called a prop. I think of state as the current state of our web application. 

1.  Describe props.

prop is basically a javascript functions input. Props themselves are properties. We pass around props as objects that point to the information we want displayed in our components. Props themselves are immutable-read only. We pass down state down from the parent component to the child component and it renders out as props. I think of props as pointers to objects and can be reused as we go down the line.  