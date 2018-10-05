# Answers

1.  What is React JS and what problems does it try and solve?
    -React is a UI library used to build applications using reusable, DRY-friendly components that can update changes in your application using the virtual DOM
    -React tries to solve the problem of memory issues that come with accessing the DOM directly an excessive amount of times when the entire page/app needs to re-render every time any piece changes. by keeping track of state and keeping your app modular with components, individual components can render when state changes without affecting everything else

1.  What does it mean to _think_ in react?
    -thinking in React means looking at a page/app and seeing the individual building blocks that could be components and thinking about how information is passed from one to the other, especially differentiating components that displat data and components that the user actually interacts with

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    -functional components are used to compose DOM elements that typically display data in some way on the page. Class components utilize the React.Component base class to gain access to state, which allows the app to pass information down any number of levels to those presentational components, and watch for changes in state to know when to rerender pieces of the page

1.  Describe state.
    -state is a Class component object that contains data that drives changes in the UI. when certain user interactions take place, we can change the state with setState and rerender the relevant components with the updated data

1.  Describe props.
    props are attributes passed down from a parent component to the child component that allow the child to retain specific attributes we want, such as a className, function that can be called on it, or dynamic state data
