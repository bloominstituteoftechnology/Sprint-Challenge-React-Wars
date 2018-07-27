# Answers

1.  What is React JS and what problems does it try and solve?
For applications with a lot of data DOM manipulations can get extremely costly in terms of performance so React uses a virtual DOM to render the current page and  store the state of the elements within. It was created by facebook to handle it's massive catalogue of cat videos and politically polarizing content.

1.  What does it mean to _think_ in react?
Using the "single responsibility principle" which is extremely helpful in web development because it urges you to divide mockup files into components each with a single function,
as many designers will create photoshop layers that can be recycled as classnames.
The benefit here is  that you can remove intersecting concerns by mixing javascript with html in a single file keeping the functionality of different  blocks seperate. That way code is modular, easily extensible and DRY.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are no different from ordinary javascript functions and they take in props as an input and return elements to the virtual dom. Class components have a state built in and its own render function invoked within. in ES6 you can create a class component by extending the react component by declaring as a  class.

4.  Describe state.
State is the internal communication system within a component. It only has access to the scope within which it was declared meaning components have independent states of one another but can be passed around as props. The state can be changed at any time, as this is the way React keeps track of the changess within the DOM.

5.  Describe props.
Props are like inputs processed by React components and rendered in the virutal dom. They are read only due to the virutal dom and therefore immutable. This is the way data is passed around in React. When a state is passed outside its component it is now a prop.
