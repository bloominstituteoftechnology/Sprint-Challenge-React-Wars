# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
Ans:
    React is a front end javascript library used to to create user interfaces for large web applications that use data and can change the data on demand without reloading the page. 

    It only deals with the view in the Model view Controller(MVC) unlike other frameworks which deals all aspects of MVC . 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
Ans:

    React components has lifecycle methods which allows us to trigger some methods in particular circumstances. 

    Some of these methods are called when an instance of a component is being created inside DOM. eg. componentWillMount().

    Some lifecycle methods are triggered after some change to the state, such us render().

    Some are used after a component is being removed or being unmounted. eg. 
    componentWillUnmount().

    Some are called when there is an error during rendering eg. componentDidCatch(); 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Ans:
    A functional component do not deal with state, it just returns data in JSX format. 
    A class component can handle and manage it's state.


4. Briefly describe PropTypes and what we use them for when building react applications.

Ans:
    PropTypes act as a filter for data being passed and we can specify the type of data we expect. It will throw compilation error if data does not meet the specification.
