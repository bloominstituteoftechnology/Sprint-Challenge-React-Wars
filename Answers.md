1. What is React JS? How does it differ from other JavaScript Frameworks?
*  React JS is a UI front-end library develped by Facebook, which is modular/based on components, declarative in nature, and highly reusable. It differs from other JS frameworks first in the fact that it is actually a library, and it does not tightly constrain the user to specific parameters during it's use, it is easy to integrate with other code, and it is based on the idea of state, wherein changes in state are responsible for individual components rendering changes in the DOM as necessary...

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
*  The React component lifecycle describes the "life" of a component in the DOM. It begins in the initialization of the component, mounting the component, changes that occur as a result of state change and rerendering, and in some cases, the death of the component through unmounting. Three of the methods used are componentDidMount, componentWillReceiveProps, and componentWillUnmount, along with the ubiquitous setState.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
*  a Class/Stateful Component has state, can use lifecycle methods, has 'this' because of class, whereas presentational components are static and simply render HTML via JSX.
