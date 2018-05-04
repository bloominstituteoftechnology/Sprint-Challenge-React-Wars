# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? -- React is a library for Javascript that is used for creating user interfaces with many users that need to access data at the same time. It's different from other Javascript frameworks because it only updates the elements and components that change, as opposed to refreshing the entire page.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do. -- The React Component Lifecycle refers to the methods that are called while a component runs. The constructor is called whenever objects are created, and it is used to initialize the component with variables and inheritance. The componentDidUpdate method updates after everything properly renders so developers can update the state without causing UI problems. componentDidMount will only be called once during the life cycle of a component, so it can be used for data fetching after every component has rendered properly.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. -- We only need Class components when we want to hold a state or when we want to use React Lifestyle components. Functional components are much simpler and only use one render method, but they can not hold a state or Lifestyle components.


4. Briefly describe PropTypes and what we use them for when building react applications. -- PropTypes are a form of data validation for the developer to make sure that we don't render things that don't exist. We can use PropTypes in functional components when we map through a object with specific key: value pairs. If we try to display a key that doesn't exist in the object, or give an existing key an invalid value, PropTypes will catch it.
