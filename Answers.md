# Answers

1.  What is React JS and what problems does it try and solve?

    - React.js is a library that is used for creating user interfaces. It speeds up the rendering process by using a virtual DOM and repainting only the changed items. It is relatively straightforward to learn because it primarily uses JavsScript.

1.  What does it mean to _think_ in react?

    - React utilizes component based architecture and each component has a single responsibility. Once the components are identified, make a static example to put everything where it belongs and make whatever tweaks are necessary. Having finished that, figure out your minimal, yet complete, state needs and where it should live. Finally, once data is flowing from parent to children, figure out and wire up the data flowing back to the parent.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    - Functional components are stateless and, like a function, take data and return something. In React, they take `props` and return UI. Classical components can, and generally have, state. They are a bit more complicated and have to include a constructor, super, and render (which returns the UI).
1.  Describe state.

    - State is a component's memory and is stored in an object. It can be updated and passed to other components (but then it isn't called state any more).

1.  Describe props.
    - Props are read-only and stored in an object. They are data that are passed from parent component to child component.
