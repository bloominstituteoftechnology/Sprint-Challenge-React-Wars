# Answers - Joshua Goode

1. What is React JS? How does it differ from other JavaScript frameworks?
  * ReactJS is a JavaScript library developed by Facebook focused on building UI. It allows for the creation of apps and components using unified files that combine HTML and JS. It presents data dynamically allowing applications to render and update data without reloading the entire page. Using JSX, a JavaScript extension syntax, allows for the quoting and implementation of HTML and JavaScript together. React's virtual DOM generates a stored cache of the DOM to target and render specific components that have changed


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
  * A react component lifecycle spans the components initilization and mounting, updating States & Props, and unmounting. There are a plethora of lifecycle methods that allow developers to control what happens within each phase. Included amongst these methods are `componentDidMount()` which is invoked as immediately after mounting and can be used to load remote data. As a component moves to the update phase, `shouldComponentUpdate()` will return a boolean directing React to either re-render a component or not. Before a component is unmounted, removed from the DOM, and destroyed, `componentWillUnmount()` is invoked. This performs general clean-up before the lifecycle ends. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  * *Functional/Presentational* components are limited compared to Class/Stateful components. They accept a `props` object but do not include a `state` therefore `props` is read-only in this type of component. They simply `render()` data passed to them.  
  *  Class/Stateful components utilize `Class` and subsequently `constructor()`, inherited from React's `Component` for which it extends. These components maintain a `state` object that takes and holds component data, via `props`, throughout its lifecycle. Changes to data can be made and rendered dynamically.  This allows fo functionality and presentation.

  4. Briefly describe PropTypes and what we use them for when building react applications.
  * PropTypes check incoming data to ensure it matches expected type. This is to prevent instances such as an application expecting and attempting to render a string but being fed a boolean or an array. 