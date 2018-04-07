# Answers

**\_ I copied these answers from the last time i did this with CS5, I am going to focus on the work. If anyone reads this, let me know if these answers are incorrect \***

**_ I just noticed there is an additional question and I will cover it at the bottom of this file _**

1.  What is React JS? How does it differ from other JavaScript frameworks?

2)  Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

## Answers

1.  react is a javascript library. react is different than most other libraries(although i think angular and vuejs work like this too) because it
    takes care of the dom for you by using a virtual dom. Instead of the regular
    MVC structure react has you create components.

2.  the component life cycle describes the stages a component in react goes
    through in an app. The lifecycle includes: Initialization, Mounting,
    Updating, and Unmounting. Three of the methods that are par tof the lifecycle
    are: a. componentWillMount: this method is executed once in a lifecycle of a
    component and before first render. It is used for initializing the states or
    props. b. render: this method mounts the component onto the DOM. c.
    componentDidMount: this is the method which is executed after the component
    mounts the DOM. this method is executed after render. this is the method
    where you would make api calls etc...

3.  the difference between a class compononet and a functional component is that
    a functional component inherits an optional object called props. Props are
    the creation parameters passed into the component.Props do not change. A
    class component can recieve props and also have state. State is an object
    which is mutable and used to store information for the component.

4.  the three arguments passed to React.createElement are: a. type: specifies the
    type of html element to use. you can also use a custom element. b. props:
    creation parameters passed into a component. c. children: the content of the
    element. dont forget that an element is just a javascript object! children
    can be strings, another react element, or an array.

**_ New question : Briefly describe PropTypes and what we use them for when building react applications. _**

PropTypes are validators for our React components that determine whether or not the props passed to our components are what we expect. In essence, we define the type of a prop being passed to a component.
