## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?

* React is used to write javascript expressions and html together as components.  It allows for states to be kept in classes and pass the state to children as props.  It renders the components into html.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* It is the period from when a component mounts (now that componentWillMount has been deprecated I don't believe there is an earlier method than this) to a component unmounts.
* componentDidMount: Performs some action when the component is mounted without error.
* componentWillReceiveProps: Checks props that are received against what props were previously received to see if rendering needs to be altered/actions need to change.
* componentDidUpdate: Performs some action when the component updates based on prevProps and prevState.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

* A class component can have a state and can recieve props when the Component is declared.
* A functional component can accept props as arguments.