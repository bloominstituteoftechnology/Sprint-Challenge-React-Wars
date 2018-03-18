# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? ReactJS is a JavaScript framework that specializes on the V from an MVC model framework. It allows you the ability to focus on the View.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

constructor() The constructor for a React component is called before it is mounted.

componentDidMount() You use this as an opportunity to operate on the DOM when the component has been updated.

setState() enqueues changes to the component state and tells React that this component and its children need to re-rendered with the updated state. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for stateless functional components.


Functional components are just JavaScript functions. They take in an optional input which, as I've mentioned earlier, is what we call props.

Presentational components are coupled with the view or how things look. These components accept props from their container counterpart and render them. Everything that has to do with describing the UI should go here. 