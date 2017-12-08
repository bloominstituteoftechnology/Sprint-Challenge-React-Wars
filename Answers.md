# 1. What is React JS? How does it differ from other JavaScript Frameworks?

* `React` is a declarative, efficient, and flexible JavaScript library for building user interfaces. `JSX` is a preprocessor step that adds XML syntax to JavaScript. It is not needed but makes the javascript more elegant. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.

* A JavaScript framework is an application framework written in JavaScript. It differs from a JavaScript library in its control flow. A library offers functions to be called by its parent code, whereas a framework defines the entire application design.[2] A developer does not call a framework; instead it is the framework that will call and use the code in some particular way.
# 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

* The React Component Lifecycle method starts with creating a component is bascially when a component get mounted onto the DOM and unmounted then when component receives new Data.

`ComponentwillMount()` is the start with no component to play with yet, so you can’t do anything involving the DOM.
 `render()` is a method that renders the components to the Virtaul DOM
 `componentDidMount` is when when a user can load their data. The data component can be used no.w

 # 3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

 * One of the differences between the two is that a class components have more feaures and use `state`.  State, on the other hand, is an object that is owned by the component where it is declared. Its scope is limited to the current component.

 * Fuctional components are simple javascript functions.

 # 4. Name the three arguments that are passed into the `React.createElement()` function?

 * The three arguments are: type, props, children.

 * type (string | React.createClass()):
Can be a string which represents an HTML element (or custom HTML element) or React component instance (i.e., an instance of React.createClass())+

* props (null | object):
Can be null or an object containing attributes/props and values

* children (null | string | React.createClass() | React.createElement()):
Children can be null, a string that gets turned into a text node, an instance of React.createClass() or React.createElement()