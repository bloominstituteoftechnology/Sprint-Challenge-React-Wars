# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is one of the most popular UI Libraries today. It is used to create complex and rich user interfaces without the overload of too much code.  By the use of components(the building blocks of React applications), we can display data that can hold ‘state’ on the screen for users. 
React implements a virtual DOM that only renders the ‘state’ data as the user chooses which keeps the actual DOM from being bogged down with every piece of ‘state’ data that is needed to run a large application. This in turn takes a lot of pressure off of the browser and makes the user experience speedier, more smooth, and generally more satisfying.
For the developer, React is easier to read and write by the use of JSX that eliminates large, nested objects. The ‘separation of concerns’ philosophy (separate files for each component) makes it easier to debug and pinpoint pieces of code that need attention.


1. Describe component state.

Component state is an object that stores the property values of the component.  This allows for a re-render of the Dom every time the state changes.

1. Describe props.

Props is an object that allows components to share ‘state’.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed AND can cause a component to return a different output for the same state and props.
The use of a secondary parameter called a dependency array can sync an effect in a component to changes of state or props.

