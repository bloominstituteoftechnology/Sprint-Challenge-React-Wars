# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
The React JS is a open source library of JavaScript for building user interface, building on the foundation of JSX and vanilla JavaScript. React's notable feature would be it's use of 'props' and 'state'. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
in React's lifecycle, a component is first created and states are set. Then changes to states and props trigger an update, finishing with unmounting for components that are set to be unmounted.

1st. ComponentWillMount: mount and prerender (load) component before the render process begins
2nd. Render: renders component
3rd. ComponentWillUnmout: dismount the component from state. Update state as needed.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
THere are two rules you can follow to decide which one you use; functions cannot have methods, and they cannot have access to 'this'.
Class/Stateful component is used whenever a state or lifecyle method() involved. Functional component would be used when it doesn't need to use those two, including 'this'.

4. Briefly describe PropTypes and what we use them for when building react applications.
PropTypes is used whenvever we want to type check a property. For example, if there is a prop called 'city', then we can PropTypes check for 'strings' so that whenever the 'city' property doesn't have a 'string' type data, it will notify you of it's error, making it easier for debugging process.