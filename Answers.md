# Answers

1. What is React JS? What types of problems does it solve? How does it differ from other JavaScript frameworks?
    
    React JS is a library which is used to make developing web applications more scalable. It emphasizes the use of components, which may be reused throughout an application. This is useful when applications need to create profiles for different users, load different content in a similar structure, or add comments to posts or pictures.

    React primarily handles the 'view' aspect of the model-view-controller architecure of software. React is different from other frameworks like Angular, as other frameworks may allow the developer to manipulate the model and controller aspects as well, whereas React focuses almost entirely on the user-interface 'view' of an application. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    The React Component Lifecycle deals with the creation, updating, and removing of components. By using different methods, we can manage what happens when a component is created, updated, or removed from the DOM. They are similar to event listeners, that listen to what is going on at various components. 

    -getInitalState() sets the inital value of a component 
    -componentDidMount() allows us to make functions run as soon as the component renders to the DOM
    -componentDidUpdate() triggers functionality defined inside the method whenever the component is updated, but it is not the update itself.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

4. Briefly describe PropTypes and what we use them for when building react applications