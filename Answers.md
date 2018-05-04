# Answers

1. What is React JS? What types of problems does it solve?

React JS is a Javascript library. It helps breakdown an application into reusable components which can then be used in other parts of the application or in a completely different application altogether. One of the problems it solves is via it’s virtual DOM feature--it helps to offload the actual DOM so that if a single UI component needs to be re-rendered, the whole application doesn’t have to be re-rendered as a result of it. 


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

1- render() - Mounting of initial state
2- componentDidMount() - updating state with externally or internally stored data.
3- componentWillUnmount() - executed just before the component gets removed from the DOM. You can configure it to store the current state within local storage or some other database. 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are similar to the render function in class components as they output some JSX i.e. DOM node(s); However they focus solely on the UI and not on the behavior of the app since they don’t can’t have state nor life cycle methods.
Conversely class components allow us to maintain an internal state and to have access to lifecycle methods (adds more functionality to the app) by extension of the base class in React called the Component. 


4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes is a package provided by React. It allows us to declare a property called propTypes on our props which allows us to check the type of our data and consequently to make sure that the data we are passing down is the data that we expected it to be.
