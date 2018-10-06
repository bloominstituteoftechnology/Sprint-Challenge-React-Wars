# Answers

1.  What is React JS and what problems does it try and solve?
-->	React is a JavaScript library for building user interfaces.
--> React try ro solve 
		--	Using Reusable Components -- helps DRY coding (You can re-use components anywhere you need. 
														   As a result, your app has consistent look and feel, 
														   code re-use makes it easier to maintain and grow your codebase, 
														   it is easier to develop your app.
		--  Fast render with Virtual DOM.


2.  What does it mean to _think_ in react?
-->	Thinking in react means  :  the work of separating your UI into components. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
-->	Functional/Presentational component :- Functional components are basically just the render function of a class component.
			don’t have state
			don’t have life cycle methods
			don’t have a this
			are pure functions and therefore easy to test
			are easier to read and understand

	Class/Stateful component
			Concerned with how things work.
			Usually do not include any HTML markup — aside from wrapping divs around other components.
			Manage state — they are STATEFUL.
			Provide data (by storing it in their state and passing it as prop) and tell their ‘children’ how to behave (by passing callback functions as props).
			As extended from React.Component can make use of life cycle methods.

4.  Describe state.
-->	State is a component level storage object that we can use to hold onto data that our components may or may not need access to 
	We can create, read, delete and update state.


5.  Describe props.
-->	“props” is short for “properties” .
	Whether you declare a component as a function or a class, it must never modify its own props(read-only).

