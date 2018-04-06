# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

* ReactJS is a JS library that that uses a mark up language that is effectively a marriage because psuedo HTML and JS called JSX. It uses stateful data and props to communicate between components. It's different because it uses a virtual DOM which allows it to only alter the DOM when a change in state is identified and isolated. This makes it more lightweight and responsive. It's niche is for UI design.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* A React component decides what to render. The lifecycle defines that process, based on how and when. Using methods like `componentWillMount()`, `componentDidMount()`, and `componentWillUnmount()`, you can decide when the component is inserted into the DOM and rendered. In the order I listed them, the first one is called and invoked directly before rendering occurs. The second one is invoked and happens immediately after the node is mounted, allowing the DOM to be accessed. The final one occurs just before the component is unmounted from the DOM.

* These allow us to react to props and state changes appropriately.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* A presentational component's only purpose is to render HTML. A functional component uses JS to perform a specific task. A class component needs a constructor and super to pass props between it and the child and uses state. A stateful component uses a class and a state that gets initialized by the constructor.

4. Briefly describe PropTypes and what we use them for when building react applications.

* PropTypes is a object that uses typechecking to our component's props. It uses basic data types to export the data from the component. PropTypes and `defaultProps` are very important for our reusable components.