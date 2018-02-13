**1.**  React JS is a JavaScript library used for building user interfaces. It is different from other JavaScriptf rameworks is that it completely tkaes care of managing the DOM. It does this by using the Virtual DOM. Also, everything in React is done by working with Components.

**2.** The React Component Lifecycle describes what a React component goes through when each section of the UI renders, updates, and finally disappears. 

Three of the methods that are a part of the lifecycle are:

```componentDidMount```
This method lets you know that the component is out there, mounted and ready to be used. Now you can load in your data and anything else you will need.

```shouldComponentUpdate```
This method returns a boolean that defaults to returning true. This allows the component to ask for permission before it updates.

```componentWillUnmount```
This method allows the component to ask if you have any last-minute requests before it goes away forever.

**3.** Some of the differences between functional components and class components are that class components can have state and can use the 'this' keyword. Functional components on the other hand do not use either of these things and instead can use props.