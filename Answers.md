# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React is a front end framework deleloped by Facebook that makes it easy for developers to organize web applications into components that update only as needed through a process called reconciliation. This allows the more complex and dynamic web applications to be developed that can update and render individual componets as necessary without re-rendering the whole page anytime something on the page changes.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

When a component is created it calls it render method. Immediately after that component will mount is called. Anytime setState is invoked render will be called afterwards to update the page as necessary.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. A Class/Stateful component is a component that extends the React Component class and therefore has a state object that is initialized in the constructor function. When the state is changed via the invokaction os the setState method(also on the Component class) then the new state is rendered to the page, so if a componet that has data that will change throught out it's life then that data is stored on the state object and it needs to be a Class/Stateful component. A functional/Presiontational Component does not extend Component and therefore it does not have a state object and cannont be udated during the life of the component. It should only be used to render data that will not change. It is often used for the origional render of a page that contains other Class Components. 

4. Prototypes are basically a library that type checks data to make sure that the data being recieved is what it's supposed to be.