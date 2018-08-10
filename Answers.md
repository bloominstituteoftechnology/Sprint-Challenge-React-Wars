# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
  - React JS is a Javascript library for building user interface that displays dynamic data.
 Before displaying DOM on screen, React creates virtual DOM and finds if there are any discrepancies between existing DOM and the virtual one. If there are, React updates the DOM on screen. If not, DOM is not updated so it helps to reduce using resources.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
  - Before displayed on screen, React Components go through several steps such as mount. Around these steps, using lifecycle methods, we can update data or appearance of what to be displayed or disappeard. These methods includes componentDidMount(), componentWillUnmount(), and componentDidUpdate().


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  - Functional component is just a Javascript function. It recieves props as input, then transfer to DOM. Class components provides more features such as state, which can be manipulated before transferd to DOM.


4. Briefly describe PropTypes and what we use them for when building react applications.
  - PropTypes is a Runtime type checking for React props and similar objects. You can use prop-types to document the intended types of properties passed to components. React (and potentially other libraries—see the checkPropTypes() reference below) will check props passed to your components against those definitions, and warn in development if they don’t match. (from https://www.npmjs.com/package/prop-types)