# What is React JS? How does it differ from other JavaScript Frameworks?

* React is a declarative, efficient, and flexible JavaScript library for building user interfaces. We'll get to the funny XML-like tags in a second. Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes.


# Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* The process where all these stages are involved is called the component's lifecycle and every React component goes through it. ... Basically all the React component's lifecyle methods can be split in four phases: initialization, mounting, updating and unmounting.
* mounting - they get on
* will mount - they will do it eventually
* unmounting - they get off

# Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

*Functional components are just JavaScript functions. They take in an optional input which, as I've mentioned earlier, is what we call props.
*Class components offer more features, and with more features comes more baggage. The primary reason to choose class components over functional components is that they can have state.

# Name the three arguments that are passed into the React.createElement() function?

* The type argument passed to React.createElement(type, props, children) can be
*A string indicating a standard HTML element 
*A custom element , or a React component instance 

*I could only find two. 