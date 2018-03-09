# Answers

1.  What is React JS? How does it differ from other JavaScript frameworks?
    \*ReactJS is a JavaScript framework that allows a jumpstart for UI development. It differs from other frameworks in that it takes care of managing the DOM, via its Virtual DOM, and makes use of a reusable components structure.

2)  Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    \*The React Lifecycle is a series of steps throughout a components use, which have corresponding methods, which a developer can access in order to update or modify the component. Examples of these methods or 'hooks' for use are: using the constructor, which we now use instead of an initialize method. render, returns all the markup necessary to render the component to the DOM. componentDidMount, is called once per lifecycle, and indicates that the component and its subcomponents have rendered.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    *In a class component, we extend Component, have a constructor, which calls super(), and have state, which can hold the state properties that we give the component.
    *In a functional component, we do not extend Component, do not have a constructor or call super(). Here, we simply take in some props, and return the necessary markup to be rendered.
