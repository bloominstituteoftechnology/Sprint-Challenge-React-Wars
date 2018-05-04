# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is used to create reusable UI components. It is very scaleable and is very efficient because of the virtual DOM. The virtual DOM allows us to update and 
maintain individual elements on our page/app without having to reload the entire DOM.



2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
LifeCycle Components give better control over whatever small part of the UI we want to change, and at what stage we want to do it.
render() : renders a react element in a container.
componentDidMount() : is invoked immediately after a component is mounted.
componentWillUnmount(): is invoked immediately before a component is unmounted and destroyed.





3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional Components are just Javascript functions. Class Components are stateful and can make use of lifecycle methods.


4. Briefly describe PropTypes and what we use them for when building react applications.
    PropTypes are used to protect ourselvesfrom ourselves