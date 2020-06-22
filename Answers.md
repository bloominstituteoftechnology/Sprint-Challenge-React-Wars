# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Ans=> It a JS library created by Facebook.
•	It’s a JS library for building uI
•	Used to build single application
•	Allows us to create reusable UI components
It creates a virtual DOM (Document Object Model) in memory instead of directly manipulating the browser’s DOM

The main problem solved by react is the development of large applications that have temporal data changes. The data in such applications is not static so it changes over time. We can look at React as the V layer in model-view-controller (MVC) pattern of software development.

“React only change what it needs to change”


1. Describe component state.
Ans:=>Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

1. Describe props.
Ans:=>Props are React’s way of making components easily and dynamically customisable. They provide a way of passing properties/data down from one component to another, typically from a parent to a child component (unidirectional dataflow).It’s important to note that props are read-only and that a component must never modify the props passed to it. As such, when a component is passed props as input, it should always return the same result for the same input.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Ans:=> A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don’t require cleanup and those that do require cleanup. 
A React component without side effects is called a pure component. A component is considered pure if it always renders the same output for the same state and props. Similarly, a side effect is something that can cause a component to return a different output for the same state and props. Pure components don’t have any side effects. React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. The effect hook (useEffect()) is one of those.