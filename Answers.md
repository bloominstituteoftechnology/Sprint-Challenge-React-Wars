# Answers

1.  What is React JS and what problems does it try and solve?
   React JS is a JavaScript library that does one thing super well, which is buidling dynamic user-interfaces in a quicker and more efficient manner. 

2.  What does it mean to _think_ in react?
   This means to think in terms of components of an app, both functional and class based, to determine what parts of the app can/should be broken down into components and which type of component that needs to be. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   A Class/Stateful component is written as an ES6 class and has the benefit of holding state, which means that you can store a set of data in it and come back to that data to copy it, mutate it and return it to the state property. Functional/Presentational components are good for a single/stateless task that can then be passed to your other components. 

4.  Describe state.
   State is a property inherent in React on the Class Component. It is what holds that Component's data to be displayed or passed down to itself or other components. It should never be directly mutated and the setState() method is provided to make changes.  

5.  Describe props.
   Props is a property inherent in React that allows you to pass state down to components from this.state. 
