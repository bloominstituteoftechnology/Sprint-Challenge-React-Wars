# Answers

1.  What is React JS and what problems does it try and solve?
    
    ReactJS is a JS library developed by Facebook in pursuit of better way to create user interface. The fundamental need and inspiration behind it's development was for a way to manage lots of data and, in turn, make it 'reactive'. React is a big advantage to take when dealing with lots and lots of data that needs to be updated in 'real-time'. 
    
    Another key concept to React's ecosystem is componentization of smaller UI elements. React, much like our work with CSS pre-processors, wants us to work in separated, succinct, modular code- using different JS files to build out our UI elements. 

2.  What does it mean to _think_ in react?
    
    My last point on the previous question illustrates a big chunk of conceptualizing in React- knowing what to break out into a component and why. UI elements such as a navbar, a sign in form- these are things that can be carved out into their own component. Another big concept in "thinking React" would be the the flow of data between state and props, as opposed to hard updating data directly- muteablity.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class component: can have state, is concerned with rendering the view, has higher concerns about how the application will function. HOW THINGS WORK.

    Functional component: better for building UI elements like click event handlers or building visual components of a UI, has access to data through props, are better to start with when writing a component and later, if need be, refactoring to a class component.
    HOW THINGS LOOK.

4.  Describe state.
    State is nothing more than dynamic data for a component. In the case of class components, it's initialized with the constructor function after the class declaration. State data is accessed with the statement 'this.state._______'.


5.  Describe props.
    Props, or properties, grant child elements access to parent components' data. Props are muteable and cannot be modified. Props data is accessed with the statement 'props._________'
