# Answers
### 1. What is React JS? How does it differ from other JavaScript Frameworks?
React JS is a framework used for building user interfaces for web applications. The interface can change over time without reloading the page.

It uses a 'Virtual DOM' that manages the changes to the browsers DOM efficiently. 

It uses a JS extension syntax called JSX that allows using HTML syntax to render subcomponents

React has a 'one-way data flow' that has a set of immutable properties that are passed to the render function. Properties can be modified by using built-in functions like `setState()`



 ### 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle is a series of stages that every component goes through. Component lifecycled methods are provided to notify when each of these stages is occuring. Some examples of these methods are:

* `componentWillMount()` : This is called before `render()` is executed. Setting the `state` during this phase will not trigger a re-rendering.

* `componentDidMount()`: This is called once `render()` has been executed. This is where manipulation of the DOM should occur.

* `componentWillUpdate()` : When new props or state is received, this method will be called immediately before the the re-rendering occurs.



### 3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

* A Class component extends React.component and stores a `state`. These also have acces to lifecycle methods.
* A Functional component is a function that has `props` passed into it and returns something, typically JSX.