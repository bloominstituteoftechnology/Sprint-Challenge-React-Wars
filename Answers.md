
# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
- React is a library that facilitates front end development and UI design. It tries to solve the problem of slow manipulation of the DOM when done directly, and how to store and access data in a way such that the data is immutable; it cannot be changed unless under specific circumstances. It optimizes DOM manipulation and moving and changing data for speed and efficiency. 

2. What does it mean to think in react?
- To structure the way an app is broken down into constituent parts. Break a UI down into a JS-Component hierarchy, according to single-responsibility; build a static version of the app, then determine what data needs to be stored as state, and where; and make sure the app can be updated appropriately by the user

3. Describe state.
- data stored in the front end React app concerning the current data or condition — “state” — of the app

4. Describe props.
- short for “properties”, Props is the name of the container for data that is passed into component functions; inside a function to which data has been passed as arguments, the information will be contained in the object "props". It is a way of organizing data in parameters of a function.

5. What are side effects, and how do you sync effects in a React component to state or prop changes? 
- Side effects are actions done by a function that are outside the scope of a function, or not directly part of the main purpose of the function. Functions without side effects are called "pure functions". 
- to sync effects in a React component to state or prop changes, you can use the `useEffect` hook, which coordinates the execution of those side effects with changes to the value of certain variables included in the parameters to the hook function.