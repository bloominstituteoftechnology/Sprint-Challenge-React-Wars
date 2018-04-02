# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    React JS is a framework for creating single page applications. It uses a virtual DOM to change elements on screen causing re-rendering of only pieces of the page that need to be re-rendered. Allowing unchanging elements to remain unchanged and carry from screen to screen; this allows for faster operation and rendering upong change. One very unique feature of React is the instant rendering of changes; and the ability to change display without reloading the page; the data request and retrieval is done behind the scenes and then rendered in real time for the user.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
Since React render functions are pure and do not have an ability to store data we need a way or method of retrieving and updating data based on user interaction or events. componentDidMount() is used to mount a data state to a component for rendering; this method pulls data from the targeted source and stores it for manipulation and rendering. componentWillUnmount() is used to dismount current data state; removing current data and any active listeners. componentWillReceiveProps() is used when you want to update the currently active component with new data rather than creating a new component and dismounting/remounting the new component.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    The most obvious difference is functional/presentational components utilize props sent down from class/stateful components and then renders the necessary information after extracting it from props.
    Functional components do not have their own state.

4. Briefly describe PropTypes and what we use them for when building react applications.
    PropTypes can be used to troubleshoot "props" allowing the developer to receive instant feedback regarding the props being passed down. They can be used similar to error catching in server requests. Ultimatly they help streamline the dev process. Upon final deployment of an app all PropTypes are removed from the production build.