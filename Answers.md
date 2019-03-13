# Answers

1.  What is React JS and what problems does it try and solve?
    ReactJS is a framework used primarily to build interfaces. It consolidates
    parts of front end development historically separated, like Javascript and
    HTML (which React creates in the form of it's own special HTML symbiont, JSX
    elements) to give developers an environment in which to write easy to read,
    well organized code.

1.  What does it mean to _think_ in react?
    Thinking in React means thinking in components. It means looking at any
    project and distinguishing which parts can be separated out and made
    compartmentalized, relatively independent and re-usable.
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Functional/Presentational components look and behave much like simple
    javascript functions. They take in some input, and the output some output.
    They are primarily used to return some JSX items which will be displayed,
    while taking in a few parameters or properties of those JSX items before
    presentation. This is why they tend to be called presentational components.
    Class/Stateful components, on the other hand, come with a whole lot of bells
    and whistles that presentational components do not, one of which is state.
    State is the way that components hold on to certain values used to present
    a certain interface to the user. It is through manipulation of these values,
    and thus the state of the component, that we can alter what the user sees
    and interacts with. A class component can also hold it's own functions, much
    like a standard Javascript class, which it can use to alter the components
    state in response to actions.
1.  Describe state.
    Overlapping a little bit with the previous question, state is an object within
    a React component which keeps important values for that component. The state
    can be dynamically updated through the function setState(), which goes
    through the state object and updates that which needs updating, and nothing
    more. This makes event handling in React much faster than in other front end
    solutions, because it only updates elements which need it, and not the entire
    page.
1.  Describe props.
    props, short for properties, are the way that react components communicate
    with one another. Similar to a function, which usually has one way in (it's
    parameters) and one way out (it's return values), React components usually
    have one way in (their properties) and one way out (their return values).
    Properties are passed down from parent components to child components, and
    in return, they receive JSX elements passed up to the interface by those child
    components, based on what properties they've been given. 
