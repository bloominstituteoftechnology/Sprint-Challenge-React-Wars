# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is JavaScript library, its main difference from other JavaScript Frameworks that it gives possibility creating large scaling applications without reloading whole page, only component that receives new data can render.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
React has so-called virtual DOM that gets rendered before it becomes the actual DOM. Lifecycle methods are methods help to evaluate data before it gets displayed on the page. 

componentWillMount - components are about to be rendered.
componentDidUpdate - components are rendered in virtual DOM.
componentWillUpdate - state before components get re-rendered.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are used for manipulating and presenting data, they can't have any data themselves. Functional/Presentational components used for presenting static data.
  Classes have same capabilities as Functional components, plus class components can handle dynamic data, they have their own
state(data container).
