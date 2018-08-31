# Answers

1.  What is React JS and what problems does it try and solve?

    It is a framework/library that tries to solve the problem of sending too many changes to the DOM.  So it uses components and a virtual dom to compare what has changed and only render what has changed and not re render the entire page, making it faster. Also being to use JSX so you can write your javascript and html together.

1.  What does it mean to _think_ in react?

    Thinking in react is thinking in terms of components. Seperating everthing to the simplist block if able to. Organizing your working parts to it;s easier to fix
    later down the road.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class/stateful components handle data as it moves through the React application. These components are responsible for defnining and organizing the data. Functional/ presentational components then take that more clearly defined/ potentially better organized data and "run it through" functions and commands that dictate presentation such that now the data is actually being made useful for the app user.



1.  Describe state.

    The heart of every React component is its state , an object that determines how that component renders & behaves. In other words, state is what allows you to create components that are dynamic and interactive.


1.  Describe props.

    Props is plain JavaScript object that holds information that influences the output of render.
	Props get passed to the component (similar to function parameters).