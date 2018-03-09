# Answers

1.  What is React JS? How does it differ from other JavaScript frameworks?
    React is a JavaScript framework for building UI that is designed by Facebook. I haven't used any other JS frameworks, so it's tough to answer that second question, but I believe what makes React unique is that it is largely declarative, or functional, which means many pieces can be written once and re-used. These pieces are referred to as components -- the smaller pieces that make up the larger app. Components can be thought of like functions -- intended to serve one purpose, and plug in to the larger application.

2.  Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    Components have lifecycle methods to determine when they will run and update. Examples include:

* componentDidMount()
  * This is commonly used in instances where AJAX calls are being made, in order to ensure the data is loaded in before the component runs.
* shouldComponentUpdate()
  * This is called on with a boolean value t/f to check if the component should update. According to the author of the musefind article in training kit, this essentially says "only update if the props you care about change." shouldComponentUpdate gives control over timing of when something should re-render.
* componentDidUpdate()
  * Functionally, this is very similar to componentDidMount(). The main use case is to update the DOM upon prop or state changes.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A functional component is, simply, a javascript function. Class components are more powerful because they can have state, whereas functional components do not.
