# Answers

1.  **What is React JS and what problems does it try and solve?**

    React JS is a JavaScript library that renders HTML to the DOM using JavaScript. 

    React JS aims to solve problems of managing state changes at scale. In order to do this, React breaks down a web page or web application into a series of components that are interconnected. When the state of a component changes, React re-renders only that component as opposed to the entire page. This reduces CPU and memory usage, which allows for faster runtime and more responsive, or "reactive", web design, especially for large-scale applications.

    React JS was invented by Facebook as a means to allow their platform to scale up into billions of daily users.

2.  **What does it mean to _think_ in react?**

    To _think_ in React means to plan and model your websites according to their constituent components. This happens in several steps.

    First, break the UI into a component hierarchy. Look at the page design and decide which elements can be split off into components and how they will nest with each other.

    Next, build a static version in React. This is only for purposes of rendering your data model and seeing how your components fit together.

    Then, identify the minimal (but not complete) representation of UI state. You want to determine the minimal set of mutable state that your app needs, i.e. the least amount of interactivity necessary to make the UI work.

    After that, you want to identify where your state should live. Ideally state should be compartmentalized to a component high up in the hierarchy, and all other components should be stateless and rendered according to the state of that state component.

    Finally, you want to add inverse data flow. What this means is that data renders according to user inputs as well as state changes. Through a series of callbacks and `setState()`, data flows fluidly down and up the hierarchy in order to render the components properly.

    To read more about _thinking_ in React JS, visit the documentation here: https://reactjs.org/docs/thinking-in-react.html

3.  **Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.**

    A Class/Stateful component is a JavaScript class that manages state in React JS. The state is initialized in the class constructor and modified using `setState`. Class components can have methods that update state according to given parameters.

    A functional/presentational component does not manage its own state. Instead, its state is managed via a class/stateful component higher up in the hierarchy. Presentational components are just that: ways of presenting information, that a stateful component then renders to the DOM based on what is presented as it is passed back up the hierarchy.

4.  **Describe state.**

    State is the conceptualization of how the page is currently rendered to the DOM given data mutations in the flow of components. State is managed locally by Class/Stateful components, meaning that state is only accessible to the component that sets the state or is "stateful", and is not accessible by its children functional components, which are "presentational" or "stateless".

5.  **Describe props.**

    `Props` are data parameters that are passed to children functional components in React JS in a similar way that parameters are passed to JavaScript functions. These functional components take the `props` input and return React JSX elements describing what should appear on the screen.

    React has a single strict rule: **All React components must act like _pure_ functions with respect to their props.**

    What this means is that in the same way that a pure function should not modify its own inputs, a functional component should not change its own props. Props should only be managed by stateful/class components to ensure that the props data remains read-only and is not mutated as it moves through the component hierarchy.
