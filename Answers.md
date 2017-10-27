Questions

What is React JS? How does it differ from other JavaScript Frameworks?

React is a UI library developed at Facebook to facilitate the creation of interactive, stateful & reusable UI components. It can be rendered on the client side and/or the server side, and they can work together inter-operably. It also uses a concept called the Virtual DOM that selectively renders subtrees of nodes based upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.

Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

At the highest level, React components have lifecycle events that fall into three general categories; Initialization, State/Property Updates, and Destruction. Every React component defines these events as a mechanism for managing its properties, state, and rendered output. Some of these events only happen once, others happen more frequently.

componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful 
1. Stores info about component’s state change in memory.
2. Have authority to change state.
3. Contains the knowledge of past, current and possible future changes in state.
4. Stateless components notify them about the requirement of the state change, then they send down the props to them.

Class 
1. Calculates the internal state of the components.
2. Do not have the authority to change state.
3. Contains no knowledge of past, current and possible future state changes.
4. They receive the props from the Stateful components and treat them as callback functions.

Name the three arguments that are passed into the React.createElement() function?

1. A string that specifies the type of element to be created.
2. Props, it can be null or an object conatatining attributes and values.
3. Children, it can be null, a string, or and istance of React.createClass() or React.createElement().
