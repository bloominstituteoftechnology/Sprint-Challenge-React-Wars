# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a library used to create interactive user interfaces.
It tries to reduce the complexity of building a user interface with JavaScript and contain data within your app and not put it on the DOM. 

1.  What does it mean to _think_ in react?
This is to break an application down into component parts with each major component only having one parent component which maintains the creation and updating of all of it's state information and passes down any information that the child components need through properties.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Class/Stateful component is the maintainer of all the information required for that components current state and is the manager of it's child Functional/Presentational components.

A Functional/Presentational component is only aware of and can only act on information that it's parent has passed down through it's properties and creates itself based off that.

1.  Describe state.
State is all the data required for the components current status. (Different parent components will require different types of informational state)

1.  Describe props.
Props is data passed down to child components for them to work with, build themselves based on, and/or display information from.