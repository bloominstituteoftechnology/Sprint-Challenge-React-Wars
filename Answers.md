# Answers

1. What is React JS? What types of problems does it solve?

React JS is a User Interface JavaScript library, it solves the problem of keeping up with changing data by using rendering to update the DOM as the data changes. It also helps break down large scale applications to smaller components that are more robust for reusage.



2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

The React Component Life-cycle is a collection of methods that aide in the formation of the Component from the code to the DOM and UI.

    Methods:

    1. render() - Every component needs this method in order to bring data into the User Interface.

    2. componentDidMount() - This method is used in the component to fetch data that the component will return and then set that data into the component to be used/returned.
    
    3. componentWillUnmount() - This method is used in the lifecycle to unmount the component from the DOM and typically used to clean up any listeners / added functions in componentDidMount that will break the code.


3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`


4. Briefly describe PropTypes and what we use them for when building react applications.