1.) Q: What is React JS? How does it differ from other JavaScript Frameworks?

1.) A: React is a declaritive JavaScript library focused on efficient UI that display dynamic data. It uses JSX to make html like scripting easy. React is fantastic for creating UI, but has no built in data fetching tools or data processing tools.


2.) Q: Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

2.) A: The React Component Lifecycle is the lifecycle of the UI presented.
    A.1: ComponentWillMount: is called before the render method is executed setting state will not trigger rerendering.
    A.2: ComponentDidMount: is called when the render function is executed, this is where DOM manipulation or data fetching should happen.
    A.3: Render: This is the part of the lifecycle where props and state values are interpreted to create the correct output.


3.) Q: Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

3.) A: Class components use class syntax and should be used for templating and if state is required. A functional component... is a function and doesn't have state.


4.) Q: Name the three arguments that are passed into the React.createElement() function?
4.) A: Element, Container, Callback