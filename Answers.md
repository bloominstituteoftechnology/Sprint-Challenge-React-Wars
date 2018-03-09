# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? 

React JS is a JavaScript Library designed specifically for building users interfaces with a combination of HTML, CSS, and JS, calles JSX. Some differences are it focuses on rendering only data that has changed, and its virtual DOM. 


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. 

The React Component Lifestyle consists of Mounting, Updating, and Unmounting. The three methods that are involved are 

-`render`: a required method that examines this.props and this.state, returning something that the developer wants to put on the screen. 

-`setState`: this method is in charge of computing changes by telling React that this component needs to be re-rendered because it has received new information to display.

-`componentDidMount`: a method invoked when a component is mounted, it is mostly, used for initialization. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. 

Some differences between a Class/Stateful component and a Functional/Presentational component is a functional component is basically a JS function, bit it can take an optional input called props. A class component can refer to itself with the `this` keyword while a functional component cannot. Also class components have features, like `state` allowing it to render changed data with `setState`. A functional component just nees to return something, but a class component is required to call its render method. Functional components are the view or presentation of the react project, and class components act as the containers of those functional components.
