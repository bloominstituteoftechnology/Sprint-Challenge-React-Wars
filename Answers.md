# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
-- React JS is a library that helps us create User interfaces. React is diffrent in the sense that it is a powerful JavaScript library that uses server-side rendering (SSR) with a unique twist— one that allows it to provide a flexible, performance-oriented, componentized solution for the “V” in MVC (Model View Controller).

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
React use components. components are the reusable UI that can be devloped independently. each component has "life cycle" methods that could be over written by us. these include -
- constructor() - this helps us extend react component class.
- render() - this is a required method that renders the jsx written inside it.
- componentDidMount() -  this is invoked immidiately after a component is mounted. 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
--class components have a state attached to it. these states can be changed and updated causing things to re render. 
-- functional components don't have there own state but they can get data from parent functions state.

4. Briefly describe PropTypes and what we use them for when building react applications.
-- PropTypes is a library that helps us validate our data inside our reactapp. making sure, that we don't give in an unexpected data type or data shape.
