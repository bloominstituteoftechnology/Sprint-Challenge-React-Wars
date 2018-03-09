# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
The difference between React JS and JS framework is in React JS we use both html and JS together to created a component that will display html to the brower. The JS framework doesn't have this kind of flexiblity, it strictly works by accessing the DOM and there is clear separation between the html and JS side. 


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
componentWillMount() this happens right before the component did mount, 

componentDidMount() called right after component is mounted, which will enable us the update DOM using setState()

render() here the JSX reside and whatever change the setState() has done the render function will update and render to the DOM.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The difference between the functional component and class component is with the face that class component has state that will allow it to keep track of changes making it dynamic. The functional component is stateless and simply renders some html it is designed to render. 
