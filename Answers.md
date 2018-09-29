# Answers

**1.  What is React JS and what problems does it try and solve?**

React.JS is a JavaScript library with components we use to build user interface elements.

**2.  What does it mean to _think_ in react?**

React is all about compartmentalization, thinking of a webpage less as a unified whole thing, but broken down into the constituent parts that make up the webpage. By dividing up the webpage this way, we can isolate the behavior of the website, which is useful for debugging.

**3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.**

Stateful components have state, i.e. can store (or change) information in "memory", whereas functional components are just JavaScript functions. Functional components (or presentational, as you say) are stateless.

**4.  Describe state.**

State is information about how a component renders or behaves -- i.e. data that we can manipulate. If I had a superhero React game, I might put "health points" in state, since it would be a number that goes up or down depending on the actions of our superhero. State can only be modified within the same React component.

**5.  Describe props.**

If state can only be modified within the same React component, props are what make those components reusable. They allow data to be passed down from the parent element. In our superhero game, I might pass a prop for the `name` component, so I could have multiple superheroes. 