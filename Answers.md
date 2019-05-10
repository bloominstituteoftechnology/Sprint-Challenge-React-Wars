# Answers

1.  What is React JS and what problems does it try and solve?
     <!-- React is a JavaScript library for building user interfaces. -->
1.  What does it mean to _think_ in react?
     <!-- Thinking in react is the way you seperate your UI into components -->
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
     <!-- 
     Functional/Presentational:
     Functional components are basically just the render function of a class component.
        dont have state
        are pure functions and easy to test
        theyre easier to read and understand
     Class/Stateful:
    Provide data (by storing it in their state and passing it as prop) and tell their ‘children’ how to behave (by passing callback functions as props).
        concerned with how things work
        manage state
      -->
1.  Describe state.
    <!-- State is a component level storage object that we can use to hold onto data that our components may or may not need access to. We can create, read, delete and update state. -->
1.  Describe props.
    <!-- “props” is short for “properties”. Whether you declare a component as a function or a class, it must never modify its own props -->