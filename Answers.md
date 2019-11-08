# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

The main problem solved by react is the development of large applications that have temporal data changes. The data in such applications is not static so it changes over time. ;

React is founded on the idea that DOM manipulation is an expensive operation and should be minimized. It also recognizes that doing optimizing DOM manipulation by hand will result in a lot of "boilerplate" code, which is error-prone, boring and repetitive.
React solves this by giving the developer a virtual DOM to render to instead of the actual DOM, which it then diffs with the real DOM, and does the minimum number of DOM operations needed to achieve the new state.

This allows you (at least in theory) to completely forget about DOM performance, and you can simply re-render the entire page all the time, as soon as your state changes. This almost always results in much smaller and simpler code base, which leads to less bugs.


2. What does it mean to think in react?

Thinking in react can mean that you can break the functionality into smaller components

3. Describe state.

React application consists of components. Component consists of just HTML and Javascript. Components need to store data somewhere, they store their data in state which is an object. Each component has a different state. State consists of observable properties.

Any changes in data will change state and which will cause the component to re render.For updating state we can use setState() method in React which causes web page to render again.

4. Describe props.

Props are nothing but properties used as arbitrary input in react. They are like all the arbitrary inputs you declare in one component but want to use it in other components.


5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Effects are codes that affect something outside of the scope. The code is called after the DOM is updated.
