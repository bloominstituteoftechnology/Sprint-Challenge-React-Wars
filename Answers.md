# Answers

1.  What is React JS and what problems does it try and solve? 
    The ability to easily create reusable code that is customizable and allows you to easily manipulate the DOM.

2.  What does it mean to _think_ in react?
    To think in components essentially, Do you need a stateful component or this purely presentational. How do you want to structure a specific part of an app. How reusable do I want these components to be, should they be reusable. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Stateful components contain the state which will eventually be changed due to an interaction with the component itself. 
    Function/Presentational components are just components that simply render(display something) something and don't hold state.

4.  Describe state.
    It is an object that allows your component to behave accordingly with interactions that happen with that component, allowing it to be dynamic.
    It should also never be mutated and changed with setState.

5.  Describe props.
    A way to pass data down from your view-controller which is the master component(in a sense), due to the way that data is passed down from the top down. 