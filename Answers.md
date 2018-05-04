# Answers

1.  What is React JS? How does it differ from other JavaScript frameworks?

--A library for creating front-end interfaces. Renders data & responds to events. It builds reuseable components. Can separate data in components. Can keep components small. Has a virtual Dom aka reactDom.

2.  Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

1.componentDidMount() - Will create/setup // will also invoke a new render to whatever data we want being updated.
2.componentWillMount() - Will create/setup data // can only be invoked once as well
3.componentWillUnmount() - Will delete set data // stop data from being rendered again

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components can have set a state & functional components cannot. Class components will have more features because of state. & having the lifecycle methoids & setting a constructor .
