# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a JavaScript library used in web development to build interactive elements on websites. React JS is used to build user interfaces with reusable UI components since it acts as an open-source library. It allows you to reuse code so that developers don’t have to write everything out in raw form, which saves time and helps to minimize errors.

1. Describe component state. State allows React components to dynamically change output over time in response to certain events.

1. Describe props. Props are used to customize Component when it’s being created and give it different parameters.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
Side effects are basically anything that affects something outside of the scope of the current function that's being executed. Whenever props change, we will set the state inside useEffect. Whenever props get changed, it will set as the state inside useEffect. useEffect is primarily to handle side effects and this is one of those example for using it. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.