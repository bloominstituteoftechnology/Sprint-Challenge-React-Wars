# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
   React JS is a Javascript library. Its primary use is for single page app interfaces. It uses components that are reausable and allow changes to the page without having to reload. It is different from some other frameworks because it allows the mixing of HTML into the JavaScript code and uses a virtual DOM.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
   The React Component Lifecycle is the time from when a component is loaded (mounted) into the DOM to the time it is removed (unmounted). Three methods that are part of this lifecycle are constructor(), componentDidMount(), and render(). The 'constructor()' method is called first and initializes '.this' for the methods on the component. 'componentDidMount()' controls the event listeners, AJAX requests, and other DOM required set-up. 'render()' uses this.props and this.state to examine elements and return.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.


4. Briefly describe PropTypes and what we use them for when building react applications.