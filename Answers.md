# Answers  
<!-- Ready to Go! -->

1.  What is React JS and what problems does it try to solve?
> As it's name implies, React is a library of JavaScript code that enables the creation of resusable (typically user interace) components by rendering HTML and JavaScript to a virtual DOM that concerns itself with interpretting your React code. In this way, React becomes an abstraction of DOM that allows a programmer to concentrate on creating components (functional and/or claas), and rendering (i.e., managing) state.

2.  What does it mean to _think_ in react?
> To 'think in React' is to consider the breakdown of an application or website into it's component parts as well as - in the case of interactive applications - the reactive (also referred to as 'stateful') components that are needed to provide functionality. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
> A Class/Stateful component is a component that contains a JavaScript object called 'state' which houses data that - like props - can be passed around, but - unlike props - can be mutated; this type of component can, like JavaScript classess, possess methods and inherit properties to make state easily transferrable within your app to toggle functionalility or change data.
Essentially, a Functional/Presentation only renders the function of a class/stateful component, which is why it can be said to be 'presentational' - it does not posses the ability to mutuate the state object, only to display properties; they are easily reusable, and can be refactored into Class/Stateful components if necessary.  

4.  Describe state.
> In React, state is a JavaScript object that is delcared with an initial value (or created by some Class component) that is rendered to display it's value at a certain point in time, or mutated (usually through some event initiated by a user) to display new information in a stateless component. 

5.  Describe props.
> Props (short for _properties_) are JavaScript objects that cannot be changed that serve to display the properties of their respective components. 
