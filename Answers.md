# Answers

1.  What is React JS and what problems does it try and solve?
A.DOM manuplation is expensive (operations) so React renders a tree of javascript objcect called the virtual DOM then react compares new Virutal DOM with previous to figure out exactly what has to change in real DOM and then it changes only those parts faster. 

1.  What does it mean to _think_ in react?
Breaking the UI into component hierarchy -> building a static version -> Identify the minimal represtation of UI state -> Identify where state should live -> Add Inverse data flow

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are like JS functions the main difference with class is they have state.

1.  Describe state.
State is object with scope limited to a component and as props to its child

1.  Describe props.
Porps are used pass data from component to its children and props are immutable.
