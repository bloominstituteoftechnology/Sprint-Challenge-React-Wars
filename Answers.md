# Answers

1.  What is React JS and what problems does it try and solve?

"React JS is a library that enables you to bypass the calculation-heavy  traditional DOM manipulation one uses when rendering stuff on a webpage. It does so via the use of what's called a virtual DOM which is a model of the actual DOM. When using React, you use jsx, a pseudo-language based on javascript that incorporates HTML element abstractions that help you layout and structure component UI. When using React and rendering something in a browser, react compares the virtual DOM to the actual DOM, and updates the actual DOM to reflect any changes made to the virtual DOM. The actual DOM only updates the specific changes made in the virtual DOM and leaves everything else the same. 

React tries to address unwieldedness of working with and displaying non-trivial amounts of data in different UI components via the single responsibility principle which recommends that, when building componenents using React, each component be responsible for one isolated task."

1.  What does it mean to _think_ in react?

"It means to think about your components in a modular fashion where components are made of sub-components, each of which do a specified task."

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

"Class/Stateful:    
    -holds state
    -holds functions
    -extension of the React base class

Functional/Presentational: 
    -doesn't hold state 
    -doesn't hold functions
    -not an extension of the React base class"

1.  Describe state.

"The state of an app component is the set of data from which one could pull from (via sub-components) to display a specific piece of data on the screen. The state of an app component is mutable and its value depends on past actions performed on the data via app component functions."

1.  Describe props.

"Props are pieces of information/data represented by text that are used to link components and sub-components when developing in React. Props are used to pass around copies of state information or functions between stateful componentns and functional components and between functional components. Unlike state props are immutable."
