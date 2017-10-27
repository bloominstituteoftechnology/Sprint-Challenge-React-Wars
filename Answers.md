1. What is React JS? How does it differ from other JavaScript Frameworks?

    React JS, to me, is a marriage of JavaScript and HTML, called JSX, whoch uses the syntax of the two languages and can be described as a template language. It is used in a way to represent and render functional components and classes within a webpage to create a user interafce that can be instantly changed/used without having to refresh the page. It differs from other frameworks in the sense that it mostly a library rather than an entire framework like Angular, but it handles large amounts of data that is constantly changing and updating, and is designed for large web applications like Facebook.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    The React Componet lifecycle controls what happens when each component of your user interface renders, then updates, and then when it will disappear entirely. 

    componentWillMount(): Pre-mounts the component, it is called only once in the DOM, and it is before the render method. This method allows for configuration, and how to handle the update the state of the component before it is rendered.

    render(): Accesses the this.state and this.props and then computes how the content should be generated. It creates a sort of interaction to the page itself when called. It can be exist across multiple cycles until it reaches its end.
    
    componentDidMount(): Like componentDidMount, it's only called once into the DOM. It gives access to the children and can potentially trigger a new render method. It triggers from the bottom side of the component tree, reaching down to all the chrildren before returning to each parent.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    Functional component is one that just renders props and doesn’t have state.
    
    Class component is when you need a component state or needs the lifecycle method


4. Name the three arguments that are passed into the `React.createElement()` function?
    this.props.children?