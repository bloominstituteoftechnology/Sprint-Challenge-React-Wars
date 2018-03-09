# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
JS Lib for building GUIs. The diffrence is that certain things only update a certain times thanks to the way componenets work

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
components constantly change depending on what is needed

    1. componentDidMount is called after render() and establishes any long running properties such as refreshing data
    2. componentDidUpdate is called before a component is rendered and updates other libraries
    3. componentWillUnmount is the opposite of DidMount.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
