### 1. What is React JS? How does it differ from other JavaScript Frameworks?

* React JS is a javascript library for designing user interfaces. It allows users to change data in the virtual DOM without reloading the page.

### 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* The React Component Lifecycle is the idea of doing something before or after a component has rendered and controlling the stages it goes through. 
* There is getInitialState() which is invoked before a component mounts and sets this.state. 

* componentWillMount() is called right before the component is rendered.

* componentDidMount() is called right after componentWillMount() and signals that the component was inserted into the DOM and is available.

### 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* Functional components are basically Javascript functions and are designed to read and not modify data, taking in props as an input.

* Class components have state which can be modified and usually have a state initialized in the constructor of the class. 

### 4. Name the three arguments that are passed into the React.createElement() function?

* It takes a type argument such as an html element, an object containing properties such as props, and the children of the component.