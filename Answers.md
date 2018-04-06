# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React js takes JSX from javascript files and transpiles it into elements in the DOM. It is structured in such a way that re-rendering of components happens with every change in state, providing realtime updates to specific areas of the website.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The component lifecycle describes how components are constantly re-rendered and the various functions that are triggered during the process. componentDidMount will be called after the component has been rendered for the first time and then triggers another render pass if state is changed. render is responsible for updating the elements that need it whenever their state is changed. shouldComponentUpdate can be used to cancel the render update of a component.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class/stateful component is comprised of an ES6 class and contains a member called state that holds data belonging to that component. A functional/presentational component is a function with a return of a JSX component that can be passed props but does not have it's own state.

4. Briefly describe PropTypes and what we use them for when building react applications.
Proptypes enable components to typecheck the props sent to them by their parents. In a production application it has no effect but being able to determine if the right props are being sent can aid development a lot as knowing what a function is working with can help a ton.