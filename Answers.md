# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

eact attempts to manipulate the DOM faster. A virtual dom is rendered through a tree of javascript. React compares the virtual dom with the previous to figure out what needs to change. Then react applies those changes at a quicker rate.

1. What does it mean to think in react?

To think in react, you break the UI into component heirarcy. A static version is built, followed by identifying the
minimal representation of UI state. Then state is identified a place to be kept and data flow is added.

1. Describe state.

represents parts of the app that can change.

1. Describe props.

a special keyword in React which refers to propertied and being using for passing data from components to components.


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

side effects are basically anything that affects something outside of the scope of that current function thats being executed.

by using useEffect.

