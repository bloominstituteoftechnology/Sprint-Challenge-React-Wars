# Answers

1.  What is React JS and what problems does it try and solve?
        Reach JS is a UI library that was created in order to make it easier to build complex user interfaces. It solves many of the porblems with building complex UI's in the past by utilizing a virtual DOM. Essentially, it can compile all of the render change requests and execute them all at once allowing it to render less and maintain the speed even when there are many components. 


2.  What does it mean to _think_ in react?
        When we talk about thinking in react we are referring to the process of breaking down an application into components. We start this process by visually looking hat how we would like the application and drawing boxes around each section of the application that we would like to have in seperate components. By thinking in react we are essentially planning the application at it's most basic form. 


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
        Class/Stateful components are classes that often extend React.Components. With this form of component we can set state. Functional/Presentational components, on the other hand, are basic ES5 or ES6 style components that allow us to pass in props to be used inside our function. These functions can not set state. 


4.  Describe state.
        State is an object that allows us to influence the rending and interactivity of the app. The object takes in diffenent data component that we can later change or reset when needed. 


5.  Describe props.
        Props is short of proporties and like state it is also an object. Props helps us to be able to pass data between components and access the information stored in props within other components. 