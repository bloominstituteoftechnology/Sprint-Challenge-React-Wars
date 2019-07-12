# Answers

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Websites and applications are getting more and more complex and need to handle more and more data. Rather than have all of that data handled by the DOM in the browser, potentially bogging down the user experience as more data is processed, React removes that data handling from the DOM and only serves the information needed at the time it’s needed. Taking that pressure off of the DOM creates a better, smoother user experience.

- [ ] What does it mean to _think_ in react?

Thinking in React means looking at a web site or application in terms of separate, small, reusable components that come together to form the whole. Ideally, a component should be responsible for only one thing, and it may receive data from other components to do it's job.

- [ ] Describe state.

Simply put, state is the heart of a class component. It is local data that belongs to and is used by that component. It can be passed as properties to other components to use as props.

- [ ] Describe props.

Props are data received from another component. Props can be used locally by the component that receives them, or they can be passed down to still more components in order to do their specific jobs. Props can be thought of as the blood of the app, being passed around to where they are needed.

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect can be anything that affects something outside the scope of the function that is being executed. Geting data from an API could cause side effects, as it asynchronous and when returned may affect other things.
