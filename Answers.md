Questions:

1. What is React JS? How does it differ from other JavaScript Frameworks?

 1. React JS is a JavaScript library used for building user interfaces.
    It allows developers to create large web apps without reloading the
		page. React Js is a frontend framework that renders HTML by using components which is also called virtual DOM. 
		All the components have own internal state and can pass down the data to their children components. 
		In the children components, the parent data can be accessed by using props. 

		It differs from other JavaScript Frameworks by The differnce is React JS only handles the view layer and user interface not the whole process of application. It does not have model, view, controller structure but the virtual DOM. React JS uses virtual DOM to render the HTML by monitoring the components' state values. Once the state values changes, React JS will re-render the HTML.
		 Other JavaScript frameworks such as Angular JS, Ember JS have model, view, and controller layers architecture.

 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

 2.  React component lifecycle is the entire process of rendering, updating, re-rendering, and unmounting virtual DOM data. 
     Some lifecycle methods are componentDidMount, componentWillMount, componentWillUnmount.

 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

 3. Class component is used when the component needs to monitor its state and handle user interactiions. In the Class component, we can create custom methods and use React lifecycle methods to implement complex user interface as well as passing down the data to sub-components by using props. Whereas functional component only cares about rendering the virtual DOM without handling the data modification and complex user interface.  

 4. Name the three arguments that are passed into the React.createElement() function?

    first argument is the type of element we are creating, second one is an object containing props that get passed to the component, and third one is the children of that component.

