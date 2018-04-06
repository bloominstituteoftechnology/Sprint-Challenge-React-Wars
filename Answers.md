# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
-React JS is a Javascript library used for building user interfaces. I t makes it easy and painless to build interactive Uls. React itself is a library and not fully a framework and takes care of managing the DOM out of your hands and let's you concentrate on other things.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
React component lifecycles are methods used so you can override and run a code at a particular time in the process. Some methods are constructors, which are called before the components are mounted, you will use the constructor to initialize a state and bind event handlers. Another method is the componentDidMount, which is invoked as soon as the components is mounted. You can set up subscriptions in this method. One more method is known as the componentDidUpdate, which is invoked immediatly after an uodate in the process occurs. You can do network reguests in this method as long as the current props is compared to the previous props.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional and presentational components are functions that take in optional input which is the props which will be immutable and top down. Class components on the other hand comes with states which offer more features than the functional components. They will have the state that gets initialized in the constructor.
