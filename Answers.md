# Answers

1.  What is React JS and what problems does it try and solve?
    React is a javascript library for building user interfaces. React was built to manage large, scalable apps that can handle large quantities of data without bogging down the actual DOM.

1)  What does it mean to _think_ in react?
    Thinking in react refers to breaking a project down into a logical react workflow. You start with a mock and you break that down into a hierarchy of components. You then build a static version of that (without state). You then identify the minimal set of mutable state that your app needs and figure out where your state should live. Finally you add your data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is a regular pure JavaScript function that accepts props as its argument, and returns some JSX whereas class based component is in fact a JavaScript class. It extends React.Component, and its only required method is render().

1.  Describe state.

State is one of the two types of data in react (the other being props). It is essentially an object that determines how that component renders & behaves. It is created in the component and is changeable by using the setState() method.

1.  Describe props.

Props stands for properties and also manages data in react. Props, unlike state, is passed to the component, similar to how an argument is passed to a function.
