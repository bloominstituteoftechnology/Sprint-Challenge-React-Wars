# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library that is all about managing data(state). It allows us to render to a virtual DOM as opposed to the actual DOM and then diffs between the 2 and only updates what needs to be updated. Manipulating the actual DOM over and over again is expensive by diffing we take the load of the browser becasue we only update smaller chunks here and there. 

2.  What does it mean to _think_ in react?
Thinking in react is fairly simple. It's basically about taking the UI and breaking it down into smaller components and sub components. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

ok, this question is actual hard for me to answer but basically Stateful or class components are the magic makers. This is the heart of the app. This is where your state is held this is the queen or king. 

and functional or presentational components are its staff. They take in the props and display a button using the data etc. so it makes stuff look good. it uses the data that the class component has passed down. It doesn't change the data just displays it. 
 


4.  Describe state.
State is everything. Ok, not everything but if props are potatoes then state is the meat. It lives in the class component and is passed around using props. Because state is data


5.  Describe props.
  props are read only. We use them to grant access to the data and pass it around. 
