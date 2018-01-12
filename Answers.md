* Q) What is React JS? How does it differ from other JavaScript Frameworks?
* A) React JS is a JavaScript library used to build user interfaces. Some of the things that set it apart from other JS frameworks are the fact that it features:
- One-way data flow, so values are passed to a component's render function to update only the parts of the view that have been changed - not the entire view.
- Virtual DOM, a lightweight copy of the DOM used to track changes made by the app so that only what has changed needs to be re-rendered in the view.
- JSX, an extension of JS syntax that combines HTML and its syntax with JS to render components.

* Q) Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
* A) Components are mounted to the DOM, rendered as necessary to display changes in state, and unmounted when no longer necessary to remove them from the view.
- The constructor() establishes the state and what it contains
- The render() method examines this.props and this.state and returns React elements or data such as strings, numbers, etc.
- componentDidMount() can be used to set state after render has mounted changes in the virtual DOM

* Q) Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
* A) A class or stateful component is one written with the class keyword and that may maintain state and make changes to it
- A functional or presentational component is one written as a function, and it does not concern itself with managing state. It typically takes in props and executes or returns JSX.

* Q) Name the three arguments that are passed into the React.createElement() function?
* A) The three arguments are:
- a type, such as an HTML element or react class
- props
- the children of the component