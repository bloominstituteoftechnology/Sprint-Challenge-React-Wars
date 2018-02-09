## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?

ReactJS represents View in MVS, or Model, View, Controller framework paradigm which means it is only responsible for the user interface of the webpage. React was created at Facebook, maintaned by Facebook and many other independent contributors. It uses its own virtual DOM that communicates with the browser's DOM only when UI changes have to be made to the DOM which makes it more efficient.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Putting an element onto the webpage is called mounting in react. Each component has several “lifecycle methods” that you can use to run code at a certain time in the process. Methods prefixed with *will* are called right before something happens, and methods prefixed with *did* are called right after something happens.

componentWillMount() is called immediately before mounting occurs, and it is called beffore render().

componentDidMount() is called immediately after a component is mounted. This method is used to initialize data, instantiate network request in case of external data coming from a remote endpoint.

shouldComponentUpdate() is called before rendering when new props or state are being received. 

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

Unlike *Functional/Presentational component*, *Class/Stateful component* has a *state* feature. State in combination with props allow components to pass data from parents to children.