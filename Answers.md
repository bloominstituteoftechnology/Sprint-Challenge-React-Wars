## What is React JS? How does it differ from other JavaScript Frameworks?

1. React is a library to create UI. It is pretty much focused on how the interface connects to everything else. It's different in that it runs a Virtual DOM to basically take care of the DOM    for you.


## Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

2. The React Component Lifecycle is several methods that can be overridden to run certain things at specific areas in the component.
    - componentDidMount() : Ivoked immediately after a component is mounted, good for data being loaded from a remote endpoint (i.e. subscriptions)
    - setState() : Used to re-render a component and its chrildren, such as updating the ui in response to event handlers.
    - render() : A required  method that does not interact directly with the browser and should return the same result each time it is invoked.



## Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

3. Functional components are literally JavaScript functions. Class components have access to additional features such as local state.




## Name the three arguments that are passed into the React.createElement() function?

4. Children, Props, Type