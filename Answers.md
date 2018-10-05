# Answers

1.  What is React JS and what problems does it try and solve?
React is a component based javascript library. It deals with the problem of page data updating at such a rate that it slows down the app. Instead of rendering the page everytime data updates, it  works as a virtual DOM, updating only changed components. It also has reusable components which are very useful in the social media apps of today.

1.  What does it mean to _think_ in react?
Thinking in react is the idea of breaking things down into components, ideally each one only having a single functionality. Then, building a static functioning app that doesn't have interactivity, so only using props, and no state. Finally, you start implementing data updates and state into the app, and end up with a data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
a functional component is the simplest, base way to write a component. It is just a javascript function. Class components are used when the component needs to handle local state. 

1.  Describe state.
    State stores data within the component. It holds onto data between renderings. 

1.  Describe props.
    Props also store information, but they can be passed down through components. 