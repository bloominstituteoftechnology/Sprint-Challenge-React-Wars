# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library which allows us to write JavaScript in a way that allows us to create applications efficiently and with reusable code via components. React manipulates the virtual DOM which allows us to update the page quickly, updating individual elements rather than reloading the entire page. This improves performance significantly.

1.  What does it mean to _think_ in react?

Thinking in React requires you to break down a potential app into a hierarchy of components that each serve only one purpose. After building a static version of the app, you figure out what the minimal representation of state needs to be, and portray that in the code, and then add your data and pass it through the necessary components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component accepts props as an arguement and renders a piece of JSX onto the virtual DOM. A class component is a JS class and it extends React.Component which gives you access to lifecycle hooks and state.

1.  Describe state.

State is an object in class components which allows the UI to be data driven. State and its data can be passed as a property to other components, and these components are re-rendered whenever the data changes.

1.  Describe props.

Props are immutable properties than are passed into components and used to display data. All React components have access to props.