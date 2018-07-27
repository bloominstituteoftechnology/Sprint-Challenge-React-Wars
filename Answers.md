# Answers

1.  What is React JS and what problems does it try and solve?

  React JS is a library that allows for creating complex apps out of small pieces of code (components). It simplifies otherwise lengthy javascript code.

1.  What does it mean to _think_ in react?

  Thinking in react involves viewing parts of the page as components (functional or classical) and utilizing them via individual component files imported into a main class component to then render to the DOM in a root div.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  A class component carries state within a constructor and extends the React.Component, with the ability to carry methods, change state, and render into the root div on the DOM, whereas functional components cover or represent a single element or function on the page, do not carry state, and only present information to the page.

1.  Describe state.

  State is stored in the constructor and is able to change based on user interaction with the page, which allows the page to be reactive.

1.  Describe props.

  Props exist on each object created by a component, and allow us to change the state on the parent class component and pass state around between components.
