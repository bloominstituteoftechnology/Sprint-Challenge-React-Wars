1. What is React JS? How does it differ from other JavaScript Frameworks?
React is JS framework for creating UI Interfaces. 
How is it Different from other frameworks
a) It creates vitual DOM and uses one directional data flow via props. It does not handle the backend, it just cares about UI.
b) Creates resusable components which host the business and HTM logic in a single file.
c) Its components can be used across . Like a react component can be used for backbone.js much easily than other way arount.
d) Creates the state of component and detects the change in state to do the rerendering.
e) No manual DOM manipulation like Vanilla JS.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
React Component Lifecycle 
Each react component has several lifecycle methods that override to run code at particular times in process. 'Will' methods right before something happens. 'Did' right after something happens.
There are four *types* of methods (Mounting, Updating, Unmounting, ErrorHandling). Examples of Mounting methods
a)constructor--Defines the initial state of the object
b)ComponentWillMount--Called just before mounting the element
c)render---Pure function to render JSX. Doesn't mess up with props and state
e)ComponentDidMount--Called just after mounting the element. Usually to check API interface data flow.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
`Functional/Presentational component` Just renders JSX to parent element/root. Doesn't perform any DOM manipulations. Doesn't need any props, extending of the parent component or managing state of component. Spits out same output everytime it is called. Basically think of it as a stateless class element that just has render function.
Class/Stateful component: Just opposite of functional component
1) Extends existing methods of React.Component via Super(props)
2) Gets data from parent element through props
3) Manipulates data received by props and setState changes to re-render the component.
4. Name the three arguments that are passed into the `React.createElement()` function?
React.createElement() is invoked through JSX. It takes three arguments.
a) Type (examples <Div> or <Span>)
b) Props(<style> and stuff)
c) Children
So basically creates a DOM element under the hood.




