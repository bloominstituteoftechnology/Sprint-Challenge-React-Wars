# Answers

## 1. What is React JS? What types of problems does it solve?

React JS is a UI library for JavaScript. It aims to solve the following problems:

* Speed of Developing Larger-Scale Web Projects

ReactJS expouses the idea of "components", which are blocks of code representing elemental UI parts which can be reused over and over again, either in the same project,or different projects. This allows developers to build large web apps more quickly by using components they've coded and used before. The idea of components also helps developers to better organize and understand the structure of their app, helping to streamline the development process.

* UI Manipulation

Directly manipulating the DOM tends to be clunky, leading to big blocks of code that isn't easily readable. Additionally, vanilla DOM manipulation tends to be performance-intensive, as the browser would need to rebuild the DOM every time it is manipulated. ReactJS addresses both issues by the use of JSX, html-like JS that is "syntatical sugar" which glazes over the clunky `createElement()` commands underneath, and the virtual DOM, which ReactJS uses to help decide the most efficient way to change the DOM to match what the developer wishes the DOM to look like.

## 2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

The React Component Life-Cycle are the stages that a React component will go through when being used. The stages are:

* Initializing - the set-up of the props and state of the component. (*This might be thrown together with mounting*)
* Mounting - the insertion of the component into the DOM.
* Updating - changes or updates to the component while being mounted.
* Unmounting - the removal of the component from the DOM.

Three methods that are a part of the this life-cyle are:

* `render()` - rendering the JSX output of the component into the DOM to be displayed to be user. This is done when the component is mounted and when it is updated.
* `setState()` - manipulation of the component's `state` object. Associated with the updating stage.
* `componentDidMount()` - a method that is called once the component is mounted. Best used for asynchronous data being set into `state`, as that data can not be set during initialization/mounting.

## 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are components comprised of a just a function that returns JSX. The function in this component is a *pure function*, which is a function that accepts can accept props as input and only outputs JSX for ReactJS to render. The function **does nothing else**: it doesn't mutate anything and it doesn't manipulate state. It's the most used function and is used to render presentational components users will see. If it needs to display data that is changing, it won't change the data itself, but receive data from a stateful component described below.

In contrast, class/stateful components are components that are set up with ES6 classes. The component becomes a class that extends the `Component` class. This extension allows the component access to various methods, with the most important of which is `setState()`. Because of this, the component can establish and manipulate an object called `state`. Class components are used to consolidate mutations within the app to one or few components that can be easily controlled and monitored, and pass the results of those mutations to child components through props. Again, these mutations are handled within the `state` object.

## 4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes allows type checking and input validation (*between components*). Because JS is a dynamically typed language, data that is the wrong type, or worse coerced into the wrong type, might screw up components that need to receive data in a certain way. Using PropTypes allows you to monitor the props a child receives by building a kind of template of what the prop needs to look like. If the prop structure differs from tha template, React will warn you of those differences, thereby streamlining debugging.

