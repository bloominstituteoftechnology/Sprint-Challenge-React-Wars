## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
    * React is a JavaScript library that uses JSX to create components for building user interfaces. Unlike other frameworks, React takes care of managing the DOM by creating a Virtual DOM.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    * The React Component Lifecycle consists of multiple methods that are available when the component gets created and inserted into the DOM, when the component updates and when the component get removed from the DOM. 
    * `componentDidMount()` is a lifecycle method that is used to add components to the DOM. Alternatively, `componentWillUnmount()` can be used to remove a component.
    * `componentWillReceiveProps()` is another method used to receive new props and update.
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    * `Class/Stateful components` extend the React `Component`. They're typically used to manage `state` and manipulate data.
    * `Functional/Presentational components` are used to simply render components. They do no handle state or manipulate data.
4. Name the three arguments that are passed into the `React.createElement()` function?
    * The arguments can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.