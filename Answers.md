# Answers

1.  What is React JS? How does it differ from other JavaScript frameworks?
    React JS is a component based framework that allows a user interface to be broken down into smaller working parts. The smaller components maintain their own states and data is passed down as props from parent components. Data flow is one way. React also manages all DOM manipulation for you, based on your component's behavior.

2.  Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    The react lifecycle is the flow react takes to render components to the page, and to adjust the states of those components. Three functions in the lifecycle that matter to us are:

* componentWillMount - This occurs before the first render. We use this to check if a component will render. We can use it to load resources or update component states.
* render is the method that actually renders the page. This is a restricted method because the states of the elements cannot be changed in the render function.
* componentDidMount - This method checks if a componenet mounted, and can be used to change the state of a component that is going to be rendered.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components do not maintain an internal state, but receive optional data from the parent component via props. Props cannot be changed by the child component. Class components has an internal state that is maintained and can be manipulated by it's containing component. They can have a constructor method and a this.state that contains data unique to the component.
