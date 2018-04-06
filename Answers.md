# Answers

### 1. What is React JS? How does it differ from other JavaScript frameworks?
* React is technically a template library, but not just a template library because it gives yo uthe ability to create custom components to reduce programmers fatigue.

### 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
* ok well the react component lifecycle is made up of built in functions that update the state of your component from before its rendered onto the dom to when its unmounted.

* componentWillMount - is the last method that is called before your component is rendered.

* componentDidMount - is used when the component is rendered on to the DOM and you are now able to manipulate the component using DOM operations.

* render - will rerender all of the components within the DOM and will display any changes done to the components

### 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
* the class component has access to a constructor and any methods within React.Component which also happens to be the state object

* a functional stateless component makes it easier on the programmer to build components faster, and its easier to read for some.

### 4. Briefly describe PropTypes and what we use them for when building react applications.
* propTypes are used to check and make sure the data youre recieving is correct, so i wouldnt want to receive a string where i'd expect an integer.
