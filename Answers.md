# Answers

1.  What is React JS and what problems does it try and solve?
	React is JavaScript front-end library for building interactive user interfaces.
DOM manipulation is an expensive operation. Optimizing DOM manipulation by hand will result in a lot of error, boring and repetitive code. React solves this by giving a virtual DOM to render to instead of the actual DOM, which it then diffs with the real DOM, and does the minimum number of DOM operations needed to achieve the new state. simply re-render the entire page all the time, as soon as our state changes. This almost always results in much smaller and simpler code base, which leads to less bugs.


2.  What does it mean to _think_ in react?
a.Breaking The UI Into A Component Hierarchy( single responsibility principle, meaning, a component should ideally only do one thing)
b.building a static version 
c. Identify The Minimal (but complete) Representation Of UI State, o make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state, DRY.
d. Identify Where Your State Should Live.  identify which component mutates, or owns, this state.
e. Add Inverse Data Flow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
functional components
•	don’t have state
•	don’t have life cycle methods
•	don’t have a this
•	are pure functions and therefore easy to test
•	are easier to read and understand
•	encourage you to keep in mind the best practices
•	can also be called presentational components
If we need anything that functional components don’t provide, we use class components.


4.  Describe state.
State is similar to props, but it is private and fully controlled by the component. state is used so that a component can keep track of information in between any renders that it does.  setState  updates the state object and then re-renders the component. State is used for mutable data, or data that will change.

5.  Describe props.
 props is shorthand for properties.  Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.
