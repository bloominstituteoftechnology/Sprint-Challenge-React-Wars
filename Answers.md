# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? 

ReactJS is a JavaScript library for building UI. It allows the creation of apps and components using unified files with JSX. It presents data dynamically allowing the applicatios to render and update without having to to reload the entire page. JSX, a javascript extension syntax, allows for the quoteing and implementation of HTML and Javascript together. React's virtual DOM generates a stored cache of the DOM to target and render specfic components that have changed.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

A React Component Lifestyle spans the components initialization and mounting, updating States and Props, and unmounting. There are many lifecycle methods that allow developers to control what happens within each phase. Of these methods are 'componentDidMount()' which is invoked as immediately after mounting and can be used to load remote data. As a component moves to the update phase, 'shouldComponentUpdate()' will return a boolean directing React to either re-render a component or not. Before a component is unmounted , removed from the DOM, and destroyed, 'componentWillUnmount()' is invoked. This performs general clean-up before the lifecycle ends.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional/PResentational components are limited compared to Class/Stateful components. They acceot a 'props' object but do not inclue a state therefore 'props' is read-only in this type of component. They simply 'render()' data passed to them.
Class/Stateful components utilize 'Class' and subsequently 'constructor()', inherited from Reacts Component for whcih it extends. These components maintain a state object that takes and holds component data, via props, throughout its lifecycle. Changes to data can be made and rendered dynamically.



4. Briefly describe PropTypes and what we use them for when bulding react applications.

PropTyoes check uncoming data to ensure it matches expected type. This is to prevent instances such as an application expecting and attempting to render a string but being fed a boolean or an array or number.