# Answers

1.  What is React JS and what problems does it try and solve?

It is a UI Component Library, built by Facebook to help solve issues with complex state. It is not a framework but a library that renders UI.It is scalable, resusable, everything is a component. No limit to manage the data. React uses "virtual-DOM"(it's a diplomat between the browser and developer). Also using JSX to create HTMLmarkup. You can also combine this with JavaScript making React limitless from what I can see. there will be only one targeted DOM element for your entire application to live within. React will simply handle the rest for you. It's a great data handler when you have multiple things going on within anapp (Facebook, Twitter, Instagram, etc.). 




1.  What does it mean to _think_ in react?

To think in React is to look at each element as a component, boxes within boxes is how I like to describe it. The whole point of React is to design apps with small parts(components). It's similar to Lego blocks that are interchangeable, making an app flexible in creating and editing.



1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful Components are always class components. They have a state that starts inside the constructor. 

Example:

constructor(props) {
  super(props);
  this.state = { count: 0 };
}

Functional Components are just plain old functions , they take in props. 

Example

const Button = props => (

<button> {prop.sign} </button>

);



1.  Describe state.

Object that determine how the app shows and behaves. It allows for components to be dynamic and interactive. 




1.  Describe props.

Parent set up to pass to child components, whatever is assigned to props is what props will be.
You gotta give it it's props.