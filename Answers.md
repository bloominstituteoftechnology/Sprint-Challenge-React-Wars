1.  React JS is a JavaScript Library that is used to build user interfaces. The interfaces are built using react components which render out HTML code when implemented.
2. The react Component life cycle helps you to be able to override to run code at particular times in the process. You override to run the code using special built in methodsthe life cycle starts with:
mounting: These methods are called when an instance of a component is being created and inserted into the DOM
updating: An update can be caused by changes to props or state. These methods are called when a component is being re-rendered
Unmounting: This method is called when a component is being removed from the DOM
Error Handling: This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
Three methods that are part of the life cycle include:
componentWillMount() = its a method that says the component will show up on the screen shortly.
componentDidMount() = its a method that says that the component is mounted and ready to be used.
componentWillUnmount() = its a method that says that removes the component in question.
3. A presentational component just renders HTML directly whilst Class components can use built in methods from the Component class, and also natively made methods to be able  change and render data.
4. The three arguments are: A react element, a react component, and a react fragment type.