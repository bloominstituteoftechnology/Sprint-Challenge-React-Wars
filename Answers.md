# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

react js is try to fix dom and making it easy to use and minimum number of DOM operations and try to fix state  of the dom to
https://www.quora.com/What-does-react-js-try-to-solve-Can-you-provide-a-practical-example

1. What does it mean to think in react?

It means to think in componenets and componenet hierarchies.

1. Describe state.

state is Object that stores information for the component.

1. Describe props.

props Stores information that is passed to other components. 


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

If a function attempts to modify something outside of its scope, then this is a side effect (more specifically a memory leak). Side effects can be prevented by surrounding the code in a useEffect hook. Putting an empty array at the end tells it to render once. Or specifying a specific array will cause it to only render on that individual element.
