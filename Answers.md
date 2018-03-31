# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    React JS is a Javascript library that helps the programmer build a UI App. It was created by the Facebook Engineers to help make life easier. React is more of a library than a full framework like AngularJS. A big difference between React and Angular is the state management. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    Reacts components have many methods that are called during the lifecycle of the component. Render() method basically renders anything that you want to render when called. ComponentWillMount() is called once only in the initial mounting life-cycle and should be used before the render() method is called. ComponentDidMount() is also called once in the whole lifecycle to let you know that when the component rendered properly.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    The functional component is used when you just want to return jsx elements. The class component is used when you manipulate data and use lifecycle components.

4. Briefly describe PropTypes and what we use them for when building react applications.

    PropTypes are validators. It helps developers prevent unwanted or incorrrect props from being passed to our components.