# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is a Javascript library for building User Interfaces. React differes from other frameworks in that, you can efficiently update and render just the right components when you data changes.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. 

- When the page loads, componentWillMount() is called, skipping the getDefaultProps() and getInitState() because the ES6 constructor method handles the initial state.

- Then, the rende() method is called on the componnet which then calls componentDidMount() and then render() method again.

- Then, there is componentWillReceiveProps(nextProps), 
- Then shouldComponentUpdate(nextProp, nextState),
- Then componentWillUpdate(nextProp, nextState),
- Then the page renders() again
- Then domponenDidtUpdate(prevProp, prevState),

- Finanlly, componentWillUnMount() will erase the component

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class? Stateful component is create as an object using the class keyword and will keep track of the state of the component while the functional/ presentational component does not eep track of the state of the component because, it just returns a div element for presentattional purposes, (created using a function).

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are the data types in react used to check the validity of the data passed around through the component if it is the data type that you expect. For example, it the data type passed mathced with PropTypes.isString ?
The component will display errors if false or will kill the program if the modifying key, isRequired is attached to the check. The PropType comes in a node module called 'prop-types' and is imported in to be used.