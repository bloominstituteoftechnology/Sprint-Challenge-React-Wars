# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

     React is a JS library that focuses on creating reusable, modular components to create elements on a web page. It does this using a virtual DOM between the code and the browser DOM, and updating the DOM as state changes, avoiding the need to reload the entire page

1. What does it mean to think in react?

    Thinking in react means thinking in components and with a modular mindset. Components themselves should be reusable and flexible functions that avoid the use of code repetition and hard-coding of content/data

1. Describe state.

    State is an object that acts as a placeholder for changes in condition within a component.  State stores the data utilized by a component, and state changes as data properties change, which in turn change the behavior of the component itself.     

1. Describe props.

   Props are arguments passed to a child component from a parent component that allow the child components to be dynamic. Props themselves cannot be changed by the component because they're technically immutable, but the arguments passed from the parent/calling component can be changed. This is what allows for dynamism in react components.  

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are events/responses/changes that occur outside of the scope of the component function, but triggered by some aspect or return from the component function. Side effects can be synced using dependency arrays and observing changes in props or state. Essentially the dependency array allows *something* (or nothing) to be observed and tracked, and based on change to the observed object, the side effect knows whether to act or not. 
