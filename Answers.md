# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

1. What does it mean to think in react?
to think in a component based way where a parent component passes props down to the children 

1. Describe state.
state is what allows you to create components that are dynamic and interactive.The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

1. Describe props.
props are properties that behave like attributes 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
side effects are anything thing that occurs outside the scope of the return function in a component. you can sync effects to stat and or prop changes by adding a second argument to the useEffect function with the name of the the dependency you want to sync.
