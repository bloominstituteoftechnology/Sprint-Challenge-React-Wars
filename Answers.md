# Answers

1.  What is React JS and what problems does it try and solve?

React Js is a library that allows us to change only certin part of the webpage instead of having to refresh the whole page.
holds in memory the components of a webpage and react to their state.

1.  What does it mean to _think_ in react?

functional programming vs object oriented programming. to think in compomnenets, working with the virtual DOM and creating new data instead of changing existin data.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

 a functional component  is simple and has a return statement. Only access to state that has been passed down by props
 a Class componenet extends the class React.Component and has a return statement inside of render(). can have internal state, which creates state that the object can use and passes it down for other components to use.

1.  Describe state.

state is the data inside props that can be changed with setState() function. every component keeps track of state and updates/rerenders when state is changed.

1.  Describe props.

the propertie that holds everything in state, and anything else you want ot pass down to other components.
