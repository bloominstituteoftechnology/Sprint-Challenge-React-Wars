# Answers

1. What is React JS and what problems does it try and solve?

	React is a Java Script library for building user interfaces.
	React helps to minimize DOM manipulation by giving the developer
	a virtual DOM to render to instead of the actual DOM.

2. What does it mean to think in react?

	Step 1: Break The UI Into A Component Hierarchy.
	Step 2: Build A Static Version in React.
	Step 3: Identify The Minimal (but complete) Representation Of UI State.
	Step 4: Identify Where Your State Should Live.
	Step 5: Add Inverse Data Flow.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

	A Functional/Presentational component is just a plain javascript function
	which takes props as an argument and returns a react element.

	Class/Stateful component has a state, lifecycle hooks and it is a javascript class which means that React creates instances of it.
	React should initialise the component class in order to call lifecycle hooks, call a constructor, initialise state and more.

4. Describe state.

	State is plain JavaScript object that holds information that influences the output of render.
	State is managed within the component (similar to variables declared within a function).

5. Describe props.

	Props is plain JavaScript object that holds information that influences the output of render.
	Props get passed to the component (similar to function parameters).
	