# Answers

1.What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

	React was created by Facebook developers to look at the state that your code is in. Previously, the only way to update a page was to re-render the entire page but React looks at just what changes were made and updates that, saving server time and money.

 2.What does it mean to think in react?

	Everything is a component and component hierarchy.

 3.Describe state.

	The object where you store props that belong to the component.

 4.Describe props.

	Props are the arguments passed into react components, similar to JS function arguments.

 5.What are side effects, and how do you sync effects in a React component to state or prop changes?

	Functions or expressions that modify variables outside of their local environment. Also, pulling info from external servers. Sync effects by passing in a dependency array as a second argument.
