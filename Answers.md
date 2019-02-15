# Answers

1.  What is React JS and what problems does it try and solve? 
REACT is a known for UI library, it  It solves the problem of explicitly specifying how to update presentation on change of state. In other approach, this is necessary for efficiency. It also solves the problem of making practical creation of reusable, compassable components.

When using React or when state is updated, we separate different UI parts of your app into ‘components’. One component would contain the necessary markup as well as the required JS to make it completely functional— this makes is very modular and reusable in a different places in app or entirely across apps.


1.  What does it mean to _think_ in react?
To think in react means to break out UI components into smaller pieces to make app more modular and reusable. We’ve gotten used to showing a UI then mutating it to update and show the latest changes. In React, is bring immutable UIs, which you never mutate and always render it. We always run the same function that was used for the initial rendering to get the updated interface.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class component is a more advance component that has a constructor, a state, and also methods contained within. A functional component is meant more for just rendering out presentational components. Having class means that you also have to take care of passing down the state and methods to child components lower in the tree. The recommendation I understand is to write more functional component since it is more performant and easier to deal with as an application scales.


1.  Describe state.
State is stored internally in the 	component, and only managed by the 	component itself. When you need to update the state, we provide a new reference for each property in the state. Example.  clicking button, typing some text, pressing some key
We follow the functional programming paradigm, which state should not be updated directly and .setState() method should be used instead.


1.  Describe props.
Props are immutable, it is equivalent to parameters of pure JS functions which we cannot change the data. When using it, we render the Component with dynamic data— It is passed from a parent component to a child component including properties and methods. 