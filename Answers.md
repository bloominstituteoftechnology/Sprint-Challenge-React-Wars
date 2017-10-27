Q: What is React JS? How does it differ from other JavaScript Frameworks?
A: React JS is a JS library used for building user interfaces. Large web applications can be built with it that use data and change the view without reloading the page.

Notable beneifts include:
* One-way data flow: immutable values are passed to the component's render function to update the view. Component does not modify the passed properties.
* Virtual DOM: An in-memory DOM used to calculate the differences between it and the actual DOM, then update just the differences on the DOM. Results in greater efficiency by reducing the need to refresh the whole view.
* JSX: A JS extension syntax allowing the use of HTML and HTML tag syntax with JavaScript to render subcomponents.

JS Frameworks typically handle all three aspects of the MVC (model-view-controller) pattern, but React is concerned with only the view. It can be used in conjunction with other JS frameworks or libraries to complete the MVC pattern.


Q: Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
A: Components are mounted into the DOM, updated as necessary due to changes in props or state, and unmounted from the DOM to remove them from the view when no longer necessary.
Mounting Methods:
* constructor() lays out the state
* render() examines this.props and this.state and returns one of the following: React elements, strings, numbers, null, booleans, or portals (??? portals)
* componentDidMount() takes further actions such as setting state after render() has mounted changes in the virtual DOM


Q: Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A:
* A Class or Stateful Component is one which maintains state
* A Functional/Presentational Component takes in props and executes or returns JSX. They are not concerned with state and do not follow lifecycle methods.

Q: Name the three arguments that are passed into the React.createElement() function?
A: The arguments are:
* a type (an HTML element or a React class or functional component)
* props
* children.