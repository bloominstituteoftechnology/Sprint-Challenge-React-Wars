# Answers

1.  What is React JS and what problems does it try and solve?

2.  What does it mean to _think_ in react?

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

4.  Describe state.

5.  Describe props.

1. React is a UI component library built by the Facebook team to solve problems of complex state, i.e. handling huge amounts of data without bogging down the DOM or the browser.

2. Thinking in React refers to looking at an app and breaking it down into components; finding the most logical way to split an app's structure into discrete parts that efficiently combine to form the machinery of how data flows into and out of the app.

3. The class component combines the presentational components and renders the page.  It also contains state, the data that an app has access to when it's being interacted with by a user.  When a user's interaction updates state data, the class component renders the page again to reflect the change in state.

4. See above.  State is the data accessible to  and controlled by the class component.  State is altered as a result of user interaction.

5.  When data is updated in state it is passed down to the components in the form of props, or properties.  Props are the data that define elements contained in presentational components.