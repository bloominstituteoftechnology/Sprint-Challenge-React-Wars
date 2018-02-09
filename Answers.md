# Answers

1. What is React JS? How does it differ from other JavaScript Frameworks?
- React JS is a JavaScript library developed by Facebook, used for creating user interfaces. The biggest difference from other frameworks is how it uses easily-created components for page elements, which interact through a virtual DOM. As each component manages its own state, this allows faster state changes, as mutating the DOM directly can be expensive.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
- These are special methods which can be declared on component classes which can run specific code when components are mounted and dismounted
- - `componentDidMount()` Probably the most commonly used lifecycle hook, this method will run after a component has been rendered (passed to the DOM and displayed on the page). 
- - `componentWillUnmount()` This is used to safely clear out data before unmounting (destroying) a component.
- - `shouldComponentUpdate()` This can be used to tell a component whether it should update its render or not after a state change.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
- The biggest difference is whether or not the component actually holds any of its own state data. A class component can maintain a `state` object where data is stored for use, while a functional component does not store anything on its own (though it can receive stored information on a class component through `props`).
- A good use case would be a component which simply displays information it receives from elsewhere, which would be `functional`, and then a component which displays a large table containing several of those smaller components, passing the data into each of them to be displayed. This larger container would be the `class` component.