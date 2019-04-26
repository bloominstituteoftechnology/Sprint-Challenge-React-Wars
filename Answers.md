# Answers

1.  What is React JS and what problems does it try and solve?
    React is just a UI library that facebook create to build powerful applications. React solve the problem for website that have data changes overtime at a high rates, and require DOM update  to be very fast and also reflect in other parts of UI if they use the same data. React solve with Virtual DOM, without page reload.

2.  What does it mean to _think_ in react?
    From what i read my reactjs.org, think in react can separate into 5 step:
    1.break the UI into a component Hierarchy
    2.build a static version in react
    3.identify the minimal representation of UI state
    4.identify whre your state should live
    5.add iverse data flow

3.  Briefly describe some of the differences between a Class/Stateful component and a            Functional/Presentational component.
    The different between class and function compenent are function component are basically just render function of a class component, we can aaccess props, but they can't have state. Also Functional/Presentational component are more lighweight, and easier to read.

4.  Describe state.
    The state can be describe as heart of the react, it is an object that determine how that component renders and behaves.

5.  Describe props.
    Pros is properties, it are how component talk to each other.