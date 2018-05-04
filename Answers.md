# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React JS is a javascript library for creating interactive web apps.  It maintains a virtual DOM and updates the actual DOM from it.  It's able to keep content up to date in real time due to its life cycle.  It also makes it easy for us to create reusable, modular components for our interactive apps.  It also provides interpolation to let us write HTML inside javascipt and vice versa.  

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The react lifecycle is what makes it reactive.  It allows us to write methods that will be invoked at given points in the lifecycle.  There are a bunch of lifecycle methods, but the ones I'm most familiar with so far are:
componentDidMount, which is invoked at the very end of the mount lifecycle, when the component is first loaded into the page, and is good for loading the default component state.
render, which is invoked in both the mount and update lifecycles, and returns interpolated HTML which is responsible for the actual display (rendering!) of the component.
setState differs from the prior two in that it's built in rather than developer defined, but it fits in here because after it modifies the state of its component it kicks off a brand new update lifecycle.  


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class/stateful component is implemented as a javascript class which extends the react Component class.  It stores its state as a child object, and has at the very least a constructor and a render method, and possibly other methods.  A Functional/Presentational component is basically just a bare render method.  It does not have a state or methods of its own, but it can be passed props.  The capabilities of functional components are a subset of those of classical components, but if a classical component is not needed a functional one is much more succinct.  
