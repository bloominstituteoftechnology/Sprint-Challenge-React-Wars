# Answers

1.  What is React JS and what problems does it try and solve?
* DOM has always been slow and expensive. ReactJS helps us manage the changing of data in our app in a dynamic way, and only update the DOM part that needs to be changed. This will prevent the app to update the whole DOM structure, and thus result in much faster dynamic website.
  
1.  What does it mean to _think_ in react?
* _think_ in React is the steps that we should go through to create a React app. First we need to create a mock design, then break this design in multiple components, and arrange them in a hierachy. 
* From here we can start building a static version in React. After that we need to identify something to manage the data of our app in a dynamic way, and state helps us do that. 
* The next step to identify the state that we need, and in which component that state should live.
* Now that we the props and state in place, we can implement the inverse data flow, which is how the children components can update the state in the parent component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
* A Class/stateful component is a component that can store state, the data that can be changed in our app.
* Function/presentational component of data cannot store state. It can only receive props from higher up component, and then return the element which is defined in the component. 

1.  Describe state.
State is how component can keep track of information in between each rendering that it does.State is immutable. A component that stores state is called stateful component, whereas one that does not is called stateless component.

1.  Describe props.
* Props is how components communicate to each other. Each component comes with each own props, or passed down from parent component. Props are immutable.