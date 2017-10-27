Questions

1. What is React JS? How does it differ from other JavaScript Frameworks?
React is a library for building User Interfaces.  Proper frameworks give more of a structure to how you should set up your code.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

How the component interacts with the DOM

componentDidMount() -> when component is mounted to DOM can do things like set initial an state
render() -> what will actually be created in the output
setState() -> creates current output, can be used to update current output with user input similar to: this.setState = this.stateArray.push(someUserInput)


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class/Stateful
->class with constructor
->has a state which is updated by user input
->the virtual DOM looks for differences and output is updated limited to user input.

Functional/Presentational
->nothing that will be manipulated by user directly
->larger piece of program that is broken out into it's own functional component that will be accessed by parent component


4. Name the three arguments that are passed into the React.createElement() function?
component, props, children
