# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library for building user interfaces. The main problem that ReactJS solves is keeping the user interface and the state in sync, especially as an app scales up. It also helps with the problem that all these updates to the UI are expensive: without React (or a similar library/framework), the complete DOM is re-rendered on every state change; whereas, React keeps track using a Virtual DOM… when the state changes, it compares the changes to the previous Virtual DOM, and then creates a new one, only updating the necessary components in the actual DOM.

2. Describe component state.

State is used to hold the data that is necessary for the page to load properly. In React, components are automatically re-rendered (if necessary) whenever state changes.

3. Describe props.

Props are data that is passed down when one component invokes another, ie. if you make an API request in App.js, but need to access that data in another component that creates Cards containing that data, you could hand that data off to the sub-component using props.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side Effects are something that happens when a component first mounts, and then when it re-renders. You can leverage side effects by calling functions inside of the useEffect hook (or with lifecycle methods in class based components). Examples of side effects: making an API request and then saving the data to state, or adding an event listener to a button when it loads.
