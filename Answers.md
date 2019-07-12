- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

  React is a library that allows for the compartmentalization of code into individual components such that code can be
  broken up into manageable chunks.


- [x] What does it mean to _think_ in react?

  Thinking in react is thinking of code in individual chunks and the flow of data from component to component via props, state, and importing/exporting that is necessary for a program written with React to function properly.


- [x] Describe state.

  State is an object that stores data to be used by a class component and its children. 


- [x] Describe props.

  Props is an object that acts as the carrier of all a parent's chosen functions and data necessary for its child component(s)

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects affect code outside of the function that's being executed. We sync effects by the second argument that we pass into the useEffect() function.
        __ = updates constantly
        [] = update on mount only
       [x] = update when x changes