# Answers

1.  What is React JS and what problems does it try and solve?

React is a javascript library that makes it easier to make UI components. Each piece of code created using react is a component that can be reused. These components interact with the virtual DOM to tell it what we expect of the DOM and what data should be expected where. If the data differs from each DOM, react will help the DOM make these changes in the most efficient way possible to reduce browser stress. This solves the power issue large scale applications like Facebook/Twitter face where data changes are impacted by millions and the DOM has to be updated constantly.

1.  What does it mean to _think_ in react?
    Thinking in react is pretty much looking at a system and breaking it down into components that will do their jobs in the most efficient way. Usually people think of this using the single responsibility principle, where each component does one thing, but very well. All while taking into account and building in order function under react data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The biggest difference between these two types of components is that in stateful components you are concerned about how it works, while the other worries about how it looks. The presentational component almost exclusively recieves data through props, has very little part in how data will be modified except calling the function, and includes a good amount of JSX. Stateful components on the other hand are typically the source of the data, and provide presentational components instructions on what to do with certain props.

1.  Describe state.

State is the heart of the component. It holds the data that will be used throughout the component and can be changed in response to a user induced event, allowing the user a dynamic experience.

1.  Describe props.

 Props is an unchangeable piece of data from state that is passed throghout a components pieces, typically as a parameter to allow users to interact with that data.