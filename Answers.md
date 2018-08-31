# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a library for JavaScript. React JS solves the issue of rendering and updating the components that change.

2.  What does it mean to _think_ in react?
    Start with a mock up, then break the UI into smaller components, grouping them as needed or seperating as small as needed. One component should do one thing. Then, build a static version of the app. Determine what is a minimum that should be included in the UI state. These are usually things that change. Then figure out where the state should be located. This is a wrapper for the components that handle the changing data. Then add inverse data flow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Functional component is simply a javascript function that displays something to the screen. A class component that handles the state is unique and handles the changing data for the component.

4.  Describe state.
    State is similar to props but is specific to and controlled by a class component.

5.  Describe props.
    Is a single object passed to a component.
