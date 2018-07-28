# Answers

1.  What is React JS and what problems does it try and solve?
    A: React JS is a JavaScript library that is used for building User Interfaces. 
        We can use it to solve a web application (generally one page), but we can also use React to make modular, reusable components. 

2.  What does it mean to _think_ in react?
    A: To think in React is to be able to think about our development in the structure syntax that React requires. It is about being able to think about the application, each individual component to the problem, and then connecting those branches together to make a functional, well-designed, usable application.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A: Functional components are just JavaScript functions. They take in an optional input (props).
    Class components can offer more features, such as state. Stateful components are always class components. Functional/Presentational components are a little easier to write, understand, and test (you can avoid using the this keyword). There are no lifecycle hooks with stateless (functional) components.

4.  Describe state.
    A: State is an object that is owned by the component where it's declared. The scope of state is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. State is used for internal communication inside a component.

5.  Describe props.
    A: props is the function input that a component accepts, processes, and then renders using JSX. props are received from a parent component and are read only (cannot be modified).
