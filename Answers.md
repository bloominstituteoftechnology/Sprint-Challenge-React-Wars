# Answers

1.  What is React JS and what problems does it try and solve?

It tries to solve the problems of complex state management, largely for the sake of performance speed, in terms of rendering graphics for users, relative to their actions.

1.  What does it mean to _think_ in react?

It means to envision your app as a series of descending parent, child, grandchild relationships, and to delegate behavior and characteristics to each relative, according to which ones should control the behavior and characteristics, and which ones should recieve them, and which ones should express them, and where those expressive components should be placed.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component is a component that holds the indirectly mutable state data, with the capability to pass that state down the relative chain as a property. A functional/presentational component generally contains the actual JSX(read: HTML) structure that will have state applied to it.

1.  Describe state.

State is more ambiguous data, in that, it is a value at any given point at time, but is subject to change under the right given conditions, or "events".
1.  Describe props.
Props are sets of data that can be passed down from top level state to child components via react's version of data attributes, and are generally more solidified than the data described in state.
