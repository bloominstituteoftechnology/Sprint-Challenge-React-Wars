# Answers

1.  What is React JS and what problems does it try and solve?
    React in my opinion aims to be mostly strictly a UI render management library, that helps by simplifying a code construct that allows management of independent components and different states as they relate to the application of the component itself (in some cases). This allows a succint option for making managed projects that independently work on their own but exhibit the ability to come together and form a tight interwoven representation of each piece of the app as it is rendered and re-rendered. It allows for a very dynamic state to be implemented for the project.

2.  What does it mean to _think_ in react?
    It means to be able to "react" in the broadest sense, both on the part of the developer themselves and the function of resultant code. It pays to think of things in the terms of: what am I trying to accomplish, what happens when the accomplishment occurs, is the system designed to appropriately handle and compensate the changes appropriately upon delivery to the endpoint.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    The former is usually has more behind the scenes work happening as it stores a default and modifiable "state" of the component, whereas typically the latter is best at performing objective tasks in a repetitive nature or displaying the end result of the state as passed from a parent to child as a prop, typically undergoing some sort of visual transformation when rendering on the screen.

5.  Describe state.
    State is typically an object that stores required information for the class component containing it, The state itself or parts of it may also be passed down as props, though typically it is bad form for the child to update state of the parent component. With the introduction of React Hooks, some of the things advised to remain in state that were intended to be static can now be used out of state effectively

6.  Describe props.
    Props is an object on a component as provided by React that can store props or rather properties for a given component to render output to the screen with. While often static, they can also be dynamic as state changes can be provided as props to child components.