# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
A: ReactJS is a JavaScript library for building user interfaces by way of small pieces of reusable code called components. React differs from other JavaScript frameworks by using a virtual DOM to reduce DOM operations/refreshes thus improving performance.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
A: The React Component has an initial creation phase, where the component is created, state and props changes triggered updates, as well as the component unmoutings phase.

Three methods:
1. componentDidUpdate: Invoked immediately after updating occurs. This method will be passed the previous props as well as the previous state.
2. componentDidMount - Invoked once after the initial render. Because the component has already been invoked when this method is invoked, you have access to the virtual DOM if you need it.
3. componentWillUnmount - This life cycle method is invoked immediately before a component is unmounted from the DOM. 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A: If you want to have state that is managed by a react component then you need to use a Class component, otherwise you can use a Functional component.

4. Briefly describe PropTypes and what we use them for when building react applications.
A: PropTypes is a built in type-checking program for React. It allows you to catch bugs with typechecking on the props for a component as your app scales.