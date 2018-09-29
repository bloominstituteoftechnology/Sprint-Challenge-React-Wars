# Answers

1.  What is React JS and what problems does it try and solve?

        React is a declarative and flexible JavaScript library for
        building user interfaces. It allows one to build modularized
        complex code uses pieces of smaller code called components.

1.  What does it mean to _think_ in react?

        This question does not invite a short answer. I would say first
        and foremost, thinking in React requires one to think in components.
        It is important to organize the different parts of a UI into their
        own functionality. Secondly, it is important to understand "state"
        and "props" and as a result when to use functional components vs. class
        components. Sometimes a component is dynamic and the data model changes.
        In this case it would require a state. Sometimes a component just takes
        some data and displays it on the screen. In this case it would only
        take props and disregard the state as a functional component. Also,
        one needs to understand inverse data flow. Passing data between components
        requires adding methods as an attribute on the component being passed
        as props to the child component whereby the child component would call
        said method when it needs to communicate back to the parent. There could
        also be cases where data only flows one way, into a component with state.
        For instance, some component could be wrapped in an HOC which fetches
        some data. That data is passed to the wrapped component and initializes
        the state. At that point the user can change the data through the UI.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

        This was touched on a bit above because you can't talk about "thinking"
        in React without talking about this. Class components are not required
        if there is no state. A state is only required when the data or the
        model is going to change within the component. Props are simply data
        coming into the component from another component. If only props are
        used without state, one only needs to implement a functional component.

1.  Describe state.

        State = data that is changing/mutating within the component which
        subsequently triggers a re-render of the UI--unless of course
        componentShouldUpdate() is evoked or a Pure Component is used.

1.  Describe props.

        Props = data coming into a component from outside. This data should
        be immutable. It can be used to initialize a state if it needs to
        mutate. 

