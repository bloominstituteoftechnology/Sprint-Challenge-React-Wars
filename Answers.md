# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library that aims to solve reusability and simplifies UI

2. What does it mean to think in react?
    To think in react I think means to use the advantages of having css, html, and js all in one spot to maximize reusability 

3. Describe state.
    State is the place where the date is coming from.  

4. Describe props.
    Props are like state only immutable.  This is why the container component should define the state that can be updated and changed, while the embedded components should only pass data from the state using props.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
    A side effect is anything that affects something outside the scope of the function being executed. You sync them to state by calling axios, and you sync them to prop changes by using useEffect()
