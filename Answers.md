## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?

    React is basically a Javascript library that is used to build user interfaces. It breaks up code into components that is usually responsible 
    for performing a particular task or function. It allows developers to create 
    really large web applications that that makes changes to its pages without 
    having to reload the page. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. 

    React components allows you to organize code into separate resuable pieces. There is the constructor which allows you initialize the local state and assign data to it. componentDidMount() is the method called after component is mounted in the constuctor and will be used to update the local state and 
    the data in it. There is also the render method which will actually render 
    the elements and the data onto the screen. 

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    
    Functional components are literally just Javascript functions that takes in 
    the prop as its argument and retruns a react element which will be rendered 
    onto the browser. Class components allows you to to define a local state 
    which will automatically updates itself when the data gets updated. It contains lifecycle hooks methods which will update the local state itself. 

4. Name the three arguments that are passed into the `React.createElement()` function?

    The three arguments that are passed into this function is the type, the property or even an array of property, and the children as well. 