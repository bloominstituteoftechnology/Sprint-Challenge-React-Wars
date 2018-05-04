# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is a JavaScript library for building user interfaces. React can be used to develop single-page applications and mobile applications with the primarily goal of providing speed, simplicity, and scalability. And I guess the way React differs from other framworks is the fact that its not a framework like Angular or Vue since the focus of React is mostly how infomation is displayed.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React component lifecycles are methods used so you can override and run a code at a particular point to update or alter the state. Some methods are constructors, which are called before the components are mounted, you will use the constructor to initialize a state and bind event handlers. 

Another method is the componentDidMount, which is invoked as soon as the components is mounted. You can set up subscriptions in this method. 

One more method is known as the componentDidUpdate, which is invoked immediatly after an uodate in the process occurs. You can do network reguests in this method as long as the current props is compared to the previous props.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional/Presentational components are read only and therefore can take input to change the state of the application like a Class/Stateful component. 

4. Briefly describe PropTypes and what we use them for when building react applications.

React Docs - "PropTypes exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode."