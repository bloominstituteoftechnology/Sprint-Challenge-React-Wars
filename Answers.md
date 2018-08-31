# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a [library] developed by Facebook to help developers build large, interactive apps and organize a lot of incoming data in a way that is quicker, easier, more modular, and DRYer. 

1.  What does it mean to _think_ in react?
    Thinking in react is thinking in terms of components. Each component should do one thing, whether that's take in information from or perform events triggered by the user, display information, or contain and organize other components. Once you have mentally broken the app up by components, you can start building so that your code reflects that structure.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A stateful component can manage the state, e.g. a function which updates a text field to reflect a user's keystrokes. It affects primarily how things work. A presentational component is mainly concerned with displaying data, and how things look.

1.  Describe state.
    State is the current, local condition of a component. It can be changed by functions, usually triggered by user interaction, e.g. clicking something to remove it from the page causes the item to be removed from the state behind the scenes as well. This new list of items, minus the one removed, becomes the new state.

1.  Describe props.
    Props allow us to pass data and functionality down from stateful components to presentational components. E.g, a function is written in the stateful component to remove an item from a state array, and is passed down as a prop(erty) to the presentational component which displays info from the array, so that it can be accessed by that component. 
 