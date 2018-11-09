# Answers

1.  What is React JS and what problems does it try and solve?

1.  What does it mean to _think_ in react?

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

1.  Describe state.

1.  Describe props.



1. React is a JavaScript library for building user interfaces. 

React has three main design concepts that drive its popularity:

1 — The use of reusable, composable, and stateful components
In React, we describe User Interfaces using components. You can think of components as simple functions (in any programming language). We call functions with some input and they give us some output. We can reuse functions as needed and compose bigger functions from smaller ones.

2 — The nature of reactive updates
React’s name is the simple explanation for this concept. When the state of a component (the input) changes, the User Interface it represents (the output) changes as well. This change in the description of the User Interface has to be reflected in the device we’re working with.

3 — The virtual representation of views in memory
With React, we write HTML using JavaScript. We rely on the power of JavaScript to generate HTML that depends on some data, rather than enhancing HTML to make it work with that data. Enhancing HTML is what other JavaScript frameworks usually do. For example, Angular extends HTML with features like loops, conditionals, and others.


2. To "think" in react is to simply how it makes you think about apps as you build them.. First, break down the UI into a component hierarchy, with the app component being the top layer, and all the individual components having data flowing to them from above. 
The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the design file and give them all names.

Then, build out the basic structure of the static app. Next, identify the most minimal representation of the UI state. Don't repeat a Todo list array 10 times in your various components; store just one in your state and pass that along downwards to your components.

Then have a state to propogate from somewhere. This is also where you probably will make a class constructor with a render function. Pass that state with props downwards so that you can control your data from just one main component.

Finally, you need to build out the "inverse data flow", which basically means that you make it so your main component can import the other components and their functionality. From there, on your main app, you can use the SetState method to update the UI, rerender the state. 

3. Class/Stateful components  offer more features, and with more features comes more baggage. The primary reason to choose class components over functional components is that they can have state.

State
State is an object that is owned by the component where it is declared. Its scope is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. When the state is passed out of the current scope, we refer to it as a prop.

Functional Components
Functional components are just JavaScript functions. They take in an optional input which we call props.

props
If components were plain JavaScript functions, then props would be the function input. Going by that analogy, a component accepts an input (what we call props), processes it, and then renders some JSX code.

4. State
State works differently when compared to props. State is internal to a component, while props are passed to a component.

State can Change — Mutable
In english the ‘state of a being’ refers to the physical condition of a person, and it is a mere state, which changes over time. Well, similarly state in React/React Native is used within components to keep track of information.

Keep in mind not to update state directly using this.state. Always use setState to update the state objects. Using setState re-renders the component and all the child components. This is great, because you don’t have to worry about writing event handlers like other languages.


5. Props
Props are short for Properties. The simple rule of thumb is props should not be changed. In the programming world we call it “Immutable” or in simple english “Unchangeable”.

Props are Unchangeable — Immutable
Components receive props from their parent. These props should not be modified inside the component. In React and React Native the data flows in one direction -> From the parent to the child.

You can write your own components that use props. The idea behind props is that you can make a single component that is used in many different places in your app. The parent that is calling the component can set the properties, which could be different in each place.

Props essentially help you write reusable code.




