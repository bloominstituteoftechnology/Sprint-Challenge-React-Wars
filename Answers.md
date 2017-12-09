1. What is React JS? Library for using user interfaces. Main component is state. How does it differ from other JavaScript Frameworks?One of other top JavaScript Frameworks in today’s time is ReactJS and again maintained by a reputed brand Facebook. Be its ability to perform well in SEO (surprisingly being part of JS family), Simpler JSX, Virtual DOM or powerful JavaScript library, ReactJS is a developer’s choice to build dynamic & high traffic web applications.

One of the best features of ReactJS web development services is that it can perform on the client side as well as can be rendered on the server side, and they can work together interoperably. It is widely used for building web applications and user interfaces.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
a. Initialization--The getInitialState method enables to set the initial state value, that is accessible inside the component via this.state.
b. State Changes-- State changes will trigger a number of methods to hook into.shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped. Obviously this method is never called on initial rendering. A boolean value must be returned.
componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true. Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
Finally componentDidUpdate is called after the render method. Similar to the componentDidMount,this method can be used to perform DOM operations after the data has been updated.
c. Props Changes-- Any changes on the props object will also trigger the lifecycle and is almost identical to the state change with one additional method being called.
Unmounting-- The only method we haven't touched yet is the componentWillUnmount which gets called before the component is removed from the DOM. This method can be beneficial when needing to perform clean up operations, f.e. removing any timers defined in componentDidMount.



3. Briefly describe some of the differences between a `Class/Stateful component`--
Class components offer more features, and with more features comes more baggage. The primary reason to choose class components over functional components is that they can have state. There are two ways that you can create a class component. The traditional way is to use React.createClass(). ES6 introduced a syntax sugar that allows you to write classes that extend React.Component.Stateful components are the most appropriate place for your application to handle the interaction logic and manage the state. They make it easier for you to reason out how your application works. This reasoning plays a key role in building maintainable web applications.

Class components can exist without state too. Here is an example of a class component that accepts an input props and renders JSX.and a `Functional/Presentational component`-- Functional components are just JavaScript functions. They take in an optional input which, as I've mentioned earlier, is what we call props.

Functional components should be your first choice for writing presentational components unless a state is required. If a presentational component requires a state, it should be concerned with the UI state and not actual data. The presentational component doesn't interact with the Redux store or make API calls

Presentational Components
Presentational components are coupled with the view or how things look. These components accept props from their container counterpart and render them. Everything that has to do with describing the UI should go here. 

Presentational components are reusable and should stay decoupled from the behavioral layer. A presentational component receives the data and callbacks exclusively via props and when an event occurs, like a button being pressed, it performs a callback to the container component via props to invoke an event handling method. 
4. Name the three arguments that are passed into the `React.createElement()` function? components, props, children