Questions

What is React JS? How does it differ from other JavaScript Frameworks?

React JS isn't yet a full fledged framework. It's a library with many plugins that give it nearly the same functionality of a framework, and a whole lot of power. React is specifically designed to work with user interfaces, and is responsible for handling user interactions. It records the changes made on a page, and by way of Synthetic events and a virtual DOM, allow a speedy response to user input. By leveraging these aspects, you can avoid the time and processor cost of rewriting the DOM every time a user makes a change, and instead only post the changes after a user submits/commits an action.



Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the lifecycle and what they do.

Component life-cycle staggers when changes are sent to the DOM for re-rendering. By limiting what needs to be re-rendered when, we free up processing space for other actions, and allow our system to run quickly.
componentWillMount - called at the beginning of the life-cycle - used as a request to fetch data - setState does not cause re-render
componentDidMount - called once in a life-cycle - signals that that the component (and child components) rendered correctly - setState DOES cause re-render
componentWillUnmount - cleans up after itself - makes resources it was using available - DO NOT use setState



Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

State refers to communication between components. State is a closure, and only exists inside the scope of a component. Once a components state is exported, it is known as a prop. Stateful components effect state.

Class or Stateless components do not alter state. They may modify a view of state, but don't actually change the nature of it.

Functional components effect change. they alter things.

Presentational components concern themselves only with the rendering or exporting to DOM. They effect the way information is viewed, but do not change the state of anything.



Name the three arguments that are passed into the React.createElement() function?

type - what are we creating
props - what are it's properties
children - what dependencies does this function have