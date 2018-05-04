# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
ReactJS is a JavaScript library (I'm pretty sure that's not exactly the same thing as a framework) that can be used to easily build web applications and user interfaces. It is designed to be able to quickly change data on a page without the user having to reload it. This would be especially useful with social media apps like Facebook and Instagram where people want to see what their friends are up to in real time.

It is different from other JS frameworks like Angular because first of all, it's a library and not a framework. A library is a smaller unit, a particular reusable piece of code that developers can link to in order to access that limited functionality. A framework is larger and more complex and can consist of several libraries.  

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React components have lifecycle methods that you can call to make sure certain sections of code get run at a specific time. Otherwise, everything will run in the order it is written and the resulting app may not run correctly.

If you put a componentDidMount method in your code, it will be called only once during the whole lifecycle once the component has rendered properly.
If you put a componentDidUpdate method in your code, it will be called after the render and each re-render. This is during the updating part of the lifecycle.
If you put a componentWillUnmount method in your code, it will be called immediately before a component is unmounted and destroyed. This method performs cleanup actions. For example, if you need to remove an event listener, this would be one way to do that.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A stateful component uses React.Component and can manage its own state. They can use lifecycle methods and access props using "this".
A functional component has no internal function declared. Its sole purpose is to simply return something, typically JSX. You can access props in a functional component but not state or any lifecycle methods.

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes is a sort of validator that makes sure you are passing/receiving the correct form of data. For example, you can use PropTypes to make sure that your prop is boolean rather than a plain text string.