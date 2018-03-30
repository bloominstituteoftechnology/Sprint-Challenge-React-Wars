# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React JS is a Javascript Library for building user interface.
What makes React really different is that it completely takes care of managing the DOM for you. It does this by using something called the Virtual DOM. Unlike other frameworks, you do everything in react by working with Components instead of Models, views, and controllers. Another thing that makes React unique is the One day data flow structure.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The lifecycle of a component can be defined as the time from when the component is first being inserted into the DOM, the entire time the component is in the DOM, and the point when the component is being removed from the DOM. There is a unique lifecycle for every React component in your code.

componentWillMount
This method is executed right before a component is added to the DOM / render(). It is generally recommended that you use 
the constructor, but this method is still included in the API mostly for backwards compatibility.

componentDidMount
Your component has now been rendered and exists in the DOM. This is the point when you should initiate AJAX requests, add event listeners, and perform any set up that requires a DOM. Calling setState during this method or any time after will cause a re-render.

componentWillReceiveProps
When your component receives new props from its parent, componentWillReceiveProps(nextProps) is triggered.
gt This is a great time to check if there are changes in the incoming props when compared to your current props and trigger a state change based on the new values. A common use-case for this is resetting state based on a change.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
 Functional components are basically just normal JS functions, they are stateless, and take in  props from another component and perform a defined function when called.
Class components have state and interact with the App's lifecycle. They interact with their state and pass it as props to a functional component, and can render components and elements for the App.
