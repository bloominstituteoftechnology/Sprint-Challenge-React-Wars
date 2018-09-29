# Answers

##1.  
What is React JS and what problems does it try and solve?
React JS was built by Facebook developers who were having a hard time managing all the changing state information, such as news feed items, person talking in chat, display picture, current user data etc.  React helps by breaking everything on the page into components, many of which take properties which are contingent on what the current state is. Therefore as state changes, such as a new person joining chat or a "like" being added to a post, the appropriate component is altered in that detail.

##2.  
What does it mean to _think_ in react?

Thinking in React seems to mostly be about thinking in terms of components, such that everything on the page is made by a javascript component, with very little or no autonomous HTML or CSS.  The Javascript, using the help of the React functions and JSX notation makes everything we see on the screen.  Thinking in React is also a lot about shifting from thinking in terms of a static webpage to thinking in terms of an App, with constantly changing data based on user input called State.

##3.  
Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component holds State which is data that changes with user input.  A Functional/Presentational component gets information from state in the form of props and returns some presentational component based on how the state changes.


##4.  
Describe state.

State is the mutable information based on user input.

##5.  
Describe props.

Props are immutable in terms of your code, they are what is passed down to functional/presentational components, they are variables that don't change their names, but are ultimately tied to state so the information they carry will change based on the state, although you won't see any changes in the code.