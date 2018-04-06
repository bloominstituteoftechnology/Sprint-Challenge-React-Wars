# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

  - React JS is a framework that allows the programmer to rapidly build dynamic web pages, allowing html to be generated based on the state being held in the application. It differs from other frameworks in that it only presumes to be a lightweight creator of views. React has no opinion on the handling of data aside from how it is handled in the final Component.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

  - The component lifecycle allows us to delegate code to be run in particular circumstances. `componentDidMount()`, for example, typically contains code that will fetch the component's data from a third party, and allows us to hold off on fetching until the component is "ready" to be populated. Two other lifecycle methods are `componentWillUnmount()` and `componentShouldUpdate()`

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  - A functional component is a simple function which returns JSX, and is used for components that have no concern for state, relying on passed in props for all of their presentation. Class components have the ability to manage state and will often have helper methods which can manipulate this state. Classes are used for components that must modify their own data.

4. Briefly describe PropTypes and what we use them for when building react applications.

  - When specified, PropTypes are used to verify all data being passed to a component, and will cause a compilation error if a mismatch is found. Particularly useful if you didn't bother to look at the data you're passing to the component.