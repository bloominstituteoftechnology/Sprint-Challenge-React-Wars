# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React JS isn't a framework but a library that was created by Facebook. React has less dependences and uses virtual DOM for you. React allows us to use props which are objects that the parent passes down to children components.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The React Component Lifecycle divides into three parts: Mounting, Updating, and Unmounting. This allows the code to be called and run at specific times. Methods part of Mounting are using a constructor(), componentWillMount(), render(), and componentDidMount. These methods are only called once at the instance a component is being created. 
constructor()- used to intialize state for the data
componentDidMount() - called when all elements and methods are mounted on UI
render()- returns components and shows them on the screen

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
You need a class component only when you are using a component stae or when you need a lifestyle method. Functional components are stateless and don't require classes or the use of a 'this' keyword.
