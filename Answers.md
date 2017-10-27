Q1. What is React JS? How does it differ from other JavaScript Frameworks?

Ans. React JS is JavaScript library for building user interface using HTML + JSX.

Difference between React and other frameworks
---------------------------------------------

React                                                             Other Frameworks
1) Javascript libray                                              1) Full fledged frameworkds written in javascript
2) Brings HTML in Javascript.                                     2) Brings Javascript into HTML.
3) Works with virtual DOM.                                        3) Works with Real DOM.
4) Server side technology.                                        4) Client side technology.
5) Requires additional tools to manage depndencies.               5) Manages dependencies automatically. 


Q2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

Through React Lifecycle methods we can control what happens when each tiny section of UI renders, updates

3 lifecycle methods for React Component LifeCycle
-------------------------------------------------
1) componentWillMount: Called before component is mounted. 99% of components will not use this lifecycle methods. Only useful
for root component which might want to do some setup at runtime before component is mounted.

2) componentDidMount: This life cycle method is called after Componenet is mounted. We can set up state using this.setState method.
This method is normally used to send AJAX request and load data.

3) componentWillReceiveProps: This life cycle method will be called if component state changes after it is mounted. Method will check
particular property which might change and updates state accordingly to reflect changes.


Q3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Ans. Class/Stateful components extends Component class and maintains component state. Also it has component lifecycle methods to initialize
and update state property as and when required.

Functional / Presentational components are stateless components. It's only purpose is to display contents using prop received from
another component.


Q4. Name the three arguments that are passed into the React.createElement() function?

1) Tag / Component: Tag (e.g. h1) or Component (e.g. another react componenet <App />)
2) props: Properties passed to react component
3) Children: Children of "Tag" argument passed to createElement function.  