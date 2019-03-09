# Answers:

1.  What is React JS and what problems does it try and solve?

    React is a JavaScript library that builds components using JSX. It attempts to solve the problems of data overload
    by creating components to build its webpage. It also increases the speed of an application by rendering to a virtual DOM
    instead of the actual DOM.

1.  What does it mean to _think_ in react?

    It means to consider your programming in the light of a component hierarchy; to see how pieces of data interact with one another and to be able to think through how best to put that data together functionally. Rather than thinking compartmentally, one might say you learn to think componentally - seeing what components exist on a webpage/design file and putting them together accordingly. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Functional or Presentational Component is concerned with how things look, or their presentation. They typically have something rendered on the DOM, and do not apply business logic (data rendering). 

    A Class or Stateful component, also known as a container component as it contains state, is primarily concerned with how things work, or how data is rendered. They generally do not render on the DOM, and do apply business logic.

1.  Describe state.

    State is the state of data at any given point in one's application. It refers to what data looks like right now. A state object holds and manages all state for one data component.

1.  Describe props.

    Props are data that is passed from a parent to a child component. They are foobar, so naming does not matter, but by convention one typically just passes ```props```. 
