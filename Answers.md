# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    --ReactJS is a Javascript library for building user interfaces. The main concept of React is that it is declaritive and component based. Using useState, React solves the problem of efficiently updating and rendering data changes. Becuse it is component based, you can pass around data using componenets and stay out of the DOM. I personally think React is extremely useful when it's understood well. It saves time, makes code consise and easier to pass around and alter the state of for UI's.

1. What does it mean to think in react?

    --Thinking in react in my opinion is a structured way of thinking in which you take-apart every part of a website into components.

1. Describe state.

    --State is what a component is or isnt. I usually reference a traffic light, a traffic light has three different states: red, yellow and green. Similarily to Facebook, if a user want to change something in their bio, theyre changing the state of it. 

1. Describe props.

    --A prop is read-only meaning we cant change it's data. We pass information held on state from one componenet to another, we pass them as props.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    --Side-effects are anything that affects something outside the scope of the function being executed and it can cause a component to return different outputs for the same state and props. We use the effect hook to tell react that a component needds to run a side effect. 