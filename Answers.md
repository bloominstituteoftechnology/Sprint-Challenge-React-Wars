# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a javascript framework that seeks to provide a standard approach to front end development using re-usable components. It is set up to make the creation and management of components especially efficient.

    Using javascript to manage a app has the drawback normally that the DOM needs to be fully updated on changes, or a large amount of program overhead would need to be put in place to avoid this. React essentially provides this overhead  up front to avoid unnecessary redrawing of the DOM. It does this with the virtual DOM, which keeps its own internal model of the DOM based on the state of the app, and only calls for the DOM to be redrawn when necessary, in a programattic, calculated manner.

2.  What does it mean to _think_ in react?
Thinking in React means taking a proposed app/solution, and breaking it up into a series of components. Components can be defined for both visual and functional reasons, and as you go through this process, it will help you develop a model for how the program will work, how it will be represented logically, and how this can be efficiently communicated visually.

One the basic component structure has been broken down, the components can be written to create a static version of the site, that works in principle based on starting props, and which has layout in place.

Then the state can be made dynamic. The basic approach is to decide which component the state of the program should be stored and modified in, and then to add and structure that state, ensuring that it will be passed as props to subcomponents. Then we will need to make sure that changes to the program are communicated to this state-keeping component. Since these changes will originate from subcomponents usually, we will need to pass methods from the state-keeping component allowing the subcomponents to communicate a need for a state change back to the state-keeping component, allow it to update state. At that point, React should oversee the visual updating of subcomponents based on the state changes.


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component can be stateful or presentational, but a functional component can only be presentational. Usually if a component is not stateful or relying on lifecycle methods, it is more succinct to make it functional.

A stateful component will keep track of the logic of an app, as well as having methods for updating and manipulating this state.

A presentational component will only be configured based on props it receives when mounted, so it will not have any state or methods of its own. It's main functionality will be to create a visual representation of the component, and to create event hooks allowing a stateful component to call its methods as needed.



1.  Describe state.
State is a special object property of a component in React, which keeps track of changing elements of the application. When state changes, it can be used to update the overall application by the virtual DOM if needed, by passing changes to props.


1.  Describe props.
Props are special properties for React components. It is an object that holds various initializing properties of the component. Some, like children, are built in by React, and lists the DOM elements/components nested within the component. Others are passed explicitly when the component is instantiated in JSX. A subcomponent's prop can be passed based on the supercomponent's state, which will cause the subcomponent to be updated if the state on which that prop is based is updated. Props do not change once a component has been created though. What really happens is if there is a state change, then a new component will be created with new props based on the updated state.
