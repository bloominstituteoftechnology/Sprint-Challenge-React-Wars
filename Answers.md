## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
    React is a JavaScript library that is used for building user interfaces. React is different from other frameworks in the fact that it really isn't a framework. It is a library. In short, developers tell React what they want the user interface to look like.  Instead of coming up with steps to describe transactions on interfaces, developers just describe the interfaces in terms of a final state. There are many other differences, but this is the one that I find most powerful - and the most likely explanation for thee rapid rise in React's popularity.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    One of the best things about React is that is takes large, complicated UIs and cuts them into small, manageable components. When needed, each component goes through a lifecycle process from premounting to unmounting as efficiently as possible.
    *componentWillMount* - component is in default position and is preparing to mount. The primary activity that takes place at this stage in the lifecycle is establishing a connection with an external API.
    *componentDidMount* - It is here that developers do all of the setup that requires a DOM. The most common use case for componentDidMount is starting AJAX calls to load in data for components.
    *componentWillUnmount* -  is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

*Class components* are dynamic and can have state, variables, methods, etc.

*Functional components* are simply a function that takes props as an input and outputs readonly markup. They don't have any state or methods 

4. Name the three arguments that are passed into the `React.createElement()` function?
    Common arguments that are plassed into the `React.createElement()` function are:
        *components*
        *props*
        *children*