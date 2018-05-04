# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    React is a declarative Javascript library for building user interfaces. It consists of elements and components. We can call in variables, functions, and parameters called props. It serves one purpose which is to display DOM elements.

    With the large number of internet users today, it is a problem how to be able to serve them real time without bogging down the servers. React is able to resolve this problem by offloading the data from the DOM.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    The React Component Lifecycle are methods that we can use when we call on the React Component Base Class. It allows us to manipulate our components. The three methods of the lifecycle are the following: 

    componentDidMount () {} - this method fetches data from render. 

    componentWillUnmount() {} - this method erases the data.   

    render() {} - A method that will return a DOM. 
    

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Functional/Presentational component are basically Javascript functions. It takes in input just like a Javascript function. This input is called props. Props are data that is immutable or cannot be changed/manipulated. Hence, props are data that are meant to be read only. 

    A Class/Stateful Component contains a state. A state is data that a component can update anytime. This data when passed on to child components become props. 


4. Briefly describe PropTypes and what we use them for when building react applications.

    PropTypes is a built-in typechecking resource in React. They can be described as validators because they  ensure that the data is valid. 
