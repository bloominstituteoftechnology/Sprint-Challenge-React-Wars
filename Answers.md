# Answers
1.  What is React JS and what problems does it try and solve?  it is a javascript library for building user interfaces with components.  it solves various problems: since developers create apps with components in react it can be simpler and more scalable, since one is creating reusable blocks of code that are very good at doing one specific thing each.  perhaps most importantly, it dramatically improves performance because it does not interact directly with the DOM and does not reload an entire page every time one piece of data changes.  React utilizes a virtual DOM that updates only one piece of data at a time, which is very useful particularly for social media sites where likes and comments on posts can change quickly and constantly. 
2.  
3.  What does it mean to _think_ in react?  it means when planning to build a website or app one should think about compartmentalizing every component, so that it can be built to be simpler, reusable, and scalable.  each component should have a single responsibility. 
4.  
5.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.  Class components have more features and functionality.  They are stateful when they have state, which is data that is specific to that component, which can then be passed down to other components to be consumed and may be changed. Presentational components are concerned with how things look or how they are presented to the view.  they are generally basic javascript funtions. 
6.  
7.  Describe state.  state is the heart of the app. it creates persistent memory in a component.  it can pass data down to other components allowing an app to be interactive or reactive. state can keep track of the changes in the information flow. 
8.  
9.  Describe props.  props are the blood that the heart pumps to the rest of the organism/program. these are properties or data that are passed down by components from parent to child.  they are immutable. 

