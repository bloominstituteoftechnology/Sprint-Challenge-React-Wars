# Answers

1. What is React JS? What types of problems does it solve?

- React JS is a component based library which helps the developer build interactive UI's 

- It solves the problem of the DOM, where things aren't running in the background and react only changes the DOM if there is a visual difference.


2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

- React components go through a lifecycle where it starts at initialization, mounting, updating and unmounting.

Ex:
componentWillMount()-Invokes a function before the initial rendering of a page.

componentDidMount()- Invokes a function only when react inserts the component to the dom

ComponentDidUpdate()- Invokes a function after react updates the dom.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Class components have acces to state, lifecycle methods, and this.

- Functional components save you a couple lines without having to declare classes or having to use the this keyword to access your props. 


4. Briefly describe PropTypes and what we use them for when building react applications.
- PropTypes is a way to check our data and make sure it is the expected result. It is useful to catch any bugs or wrong data types inside our our applications.