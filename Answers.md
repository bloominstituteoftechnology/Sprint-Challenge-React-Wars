# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React JS is a framework to help create interactive UIs.  It differs from other frameworks because it breaks sites down into very small, reusable components.  

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
A React Component goes from ComponentWillMount -> ComponentWillUnmount in its lifecycle.  
  
ComponentDidMount is when the DOM element has mounted.  It is at this point where can start playing with DOM elements, because they now exist.  Here is where you can add event listeners and start AJAX calls for your data.

ComponentWillReceiveProps alert the component that there may be incoming data.  If there is something different in the props, this method will propmpt a re-render.  

ComponentWillUnmount is the end of lifecycle for a component.  If a component is removed from the DOM, this method will take it out of memory.  

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A Functional components can only render a DOM element to the screen.  A Class component is interactive and can take in data or input to change a DOM element.

4.  Briefly describe PropTypes and what we use them for when building react applications.
PropTypes defines what sort of data you were expecting to be coming in.  You can make a certain PropType required for your site to make sure that incomming data of the wrong type won't breake your site.
