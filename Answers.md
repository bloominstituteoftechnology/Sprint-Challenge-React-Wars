# 1. What is React JS? How does it differ from other JavaScript Frameworks?
    
    React JS is a front-end JS framework, used to build UI. A website is built from components. Each components can be built in React, with or without functionality. Therefore bigger project can be broken down into small peices. Based on user interaction React will update only the changed components.
# 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

  componentDidMount() => All components mounted to the virtual DOM, so we can modify or use each component. For exampple, now we can attach the result of the API request to the DOM safely. 



# 3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

We use class components when we want to modify data, and use Functional component when we want to display data. 

# 4. Name the three arguments that are passed into the `React.createElement()` function?

  It can be: tag name, react component - function or class - and React Fragment.  