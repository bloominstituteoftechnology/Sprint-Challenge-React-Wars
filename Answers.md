# Answers

1. What is React JS? What types of problems does it solve?

    ReactJS is solution to better compartmentalize web building through components and speed up website changes being displayed by using a virtual DOM first.

2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

    constructor() - used in creating your class for react
    componentDidMount - error checking at the start and initial loading of elements, updates with setState()
    render() - displays things to the screen

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

    With React you have the option to use functional components or class components, the main difference being the use of 'state' rather than just relying on props.

4. Briefly describe PropTypes and what we use them for when building react applications.

    Proptypes are used for typechecking the props being sent in to your components, since components are reuseable you may not always have the ability to thoroughly ensure each is having the correct information passed to it. Typechecking would let you determine that only certain datatypes are sent in to your components so things don't break.