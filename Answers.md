# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    React.js is a javascript framework that serves to streamline DOM manipulation. React is the most popular framework, and was developed by Facebook with their high-volume user interaction in mind. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    React allows Real-time updates to the DOM, and this can happen through the Component Lifecycle. There are three methods that live inside a React class component that allow for this. 
    -ComponentDidMount() acts as the set-up for the Lifecycle Component.
    -ComponentWillUnmount() since things are begin updated in realtime, values need to be replaced, ComponentWillUnnmount destroys the old, now unused data. 
    -this.setState() is the base-state that will be updated during the lifecycle.  

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class/Stateful Component is React's Class builder. It is used when you want to create something that can be changed in real-time. 
    A Functional/Presentational Component is static, and does not have elements that will be changed, it is just presenting information in the app. 

4. Briefly describe PropTypes and what we use them for when building react applications.

    PropTypes are safegaurds to protect ourselves from ourselves. We use them to help us debug. 