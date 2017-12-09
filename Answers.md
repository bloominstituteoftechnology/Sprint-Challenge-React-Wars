1. What is React JS? How does it differ from other JavaScript Frameworks?



2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
$ React provides some lifecycle methods to hook into the component lifecycle, enable developers to update UI or application states. The lifecycle could be divided into three phases: Initial, Update, and Unmountings. Every phase has some lifecycle methods invovled. For example, Initial phase componentWillMount, componentDidMount, and Unmountings phase componentWillUnmount. Initial phase is when the component was first-time used, componentWillMount will be called right before render(),and will only be called once. componentDidMount will be called right after render, and also only be called once. Unmountings phase only hase one method, called componentWillUnmount, it will be called right before the component is removed from DOM.



3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
$ Class/stateful component: if a component has state(s), should use Class to define this kind of component. Class component could create Constructor, and put all the states inside Constructor;
  Functional/Presentational component: if a component is only used to present HTML code, usually this kind of component doesn't have state(s), called stateless presentational component. No need to use class to define this kind of component. could use arrow function to define it.
  


4. Name the three arguments that are passed into the React.createElement() function