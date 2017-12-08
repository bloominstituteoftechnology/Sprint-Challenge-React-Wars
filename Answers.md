## Answers
1. Question: What is React JS? How does it differ from other JavaScript Frameworks?
    * React is a framework that is very optimized to allow dynamic modifications of DOM elements using JavaScript in a very easy to manage way. Maintains browser compatibility and improves performance over standard JS Dom modifications.

2. Question: Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    * The React Component Lifecycle:
        1. Gets Default Props: getDefaultProps()
        2. Gets Initial State: getInitialState() sets the initial state of the component
        3. Component Will Mount: componentWillMount() at this point the component will be added to the DOM, custom props may or may not be accesible at this point.
        4. Render: render() returns the component's HTML to be added to the DOM
        5. Component Did Mount: componentDidMount() at this point the component is added to the DOM and all custom props are accesible.

3. Question: Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    * CLass/Stateful component:
        1. more overhead
        2. requires more resources
        3. more code needed
        4. capable of using this.SetState() to modify state.
        5. can receive props, and add them to state to be able to dynamically modify them.

    * Functional/Presentational component:
        1. less overhead
        2. uses less resources
        3. less code needed
        4. can't use this.SetState() to modify state
        5. can only receive props, but not dynamically change them.

4. Question: Name the three arguments that are passed into the `React.createElement()` function?
    * Arguments passed: The Element itself, the props, and the children.