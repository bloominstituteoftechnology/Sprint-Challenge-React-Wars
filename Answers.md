# Answers

1.  What is React JS and what problems does it try and solve?
    -React is a JS library that was designed by Facebook. React solves the problem of the DOM attempting to do too much. We have so much data coming into modern applications, animations in our styling, and other heavy aspects that react allows us to take A LOT of this load off the DOM and do a lot of the work in the virtual DOM and only make the DOM update/show what's necessary when something is updated.

2.  What does it mean to _think_ in react?
    -Thinking in react is a way to breakdown your app/code into pieces. Every component should be its own box that does 1 thing and the app you're trying to make should be the collection of all these boxes and stylized to your needs. thinking in react is the thought process of breaking apps down into these little reusable parts.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    -stateful components hold the data (aka state) and is where the data is managed. The presentational components are where we store the DOM elements that should appear (aka present themselves) on the UI side. They should not manage the data but instead pass that to the stateful component.

4.  Describe state.
    -The heart of a react app. It's the data that our components can hold onto and use, it's literally what drives our applications. It's only mutable with the setState function, without that it's immutable.

5.  Describe props.
    -If state is the heart, then props is the blood that pumps through the app. Allowing us to access the different files/compnents that we put together to create the app. This functional components do this by having props be an object that is passed as an argument.
