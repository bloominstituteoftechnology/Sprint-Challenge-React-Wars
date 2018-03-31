# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

* React is a JavaScript library for building user interfaces which allows developers to create large web apps.  It is different from JS frameworks in that it uses a virtual DOM which allows the app to use data and change dynamically without reloading the page.  In React, we define components in terms of how they are rendered on the UI and use them like functions (passing in props and returning divs, etc).


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* The React Component LC allows us to control the stages that a component goes through, before or after it has rendered or mounted.

* Render() - each react class expects a render method which returns a markup of the components in the class
* componentDidMount() - called only once in the whole life-cycle of a given component and it being called signalizes that the component — and all its sub-components — rendered properly.
* shouldComponentUpdate() method allows us to decide whether the next component’s state should trigger a re-render or not. This method returns a boolean value, which by default is true. But we can return false and the next methods won’t be called: componentWillUpdate(), render(), componentDidUpdate().  We can use shouldComponentUpdate() method if performance is a bottleneck . Especially with dozens or hundreds of components where the re-render is particularly expensive.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* A functional component is simpler, but acts like a class component with just a single render() method.  It is used for presenting static data.  A class/statefull component is used for dynamic source of data and handles any data that might change (fetching data, user events, etc).  

4. Briefly describe PropTypes and what we use them for when building react applications.

* PropTypes allows us to typecheck to make sure react can respond to the type of data coming in.  PropTypes exports a range of validators that can be used to make sure the data you receive is valid, and allowing for conditional rendering of data/components.
