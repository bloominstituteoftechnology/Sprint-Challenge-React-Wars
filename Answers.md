# Answers

1.  What is React JS and what problems does it try and solve?
Ans:Today's Web application development, demands to buid large applicationas
    effectively and rapidly.Although there are many altenatives available;React.
    Js gives enough flexibility it is unopinionated. We can write our codes the way
    we want to and most importantly React can be used with other frameworks/libraries
    such as jquery ,Angular,Backbone etc.Any app with state that changes a lot will
    benefit from React.js. as React solves this by giving the developer a virtual DOM
    to render to instead of the actual DOM, which it then diffs with the real DOM,
    and does the minimum number of DOM operations needed to achieve the new state.
    We can simply re-render the entire page all the time, as soon as your state
    changes. This almost always results in much smaller and simpler code base,
    which leads to less bugs.



2.  What does it mean to _think_ in react?
Ans  To think in react means  first imagining How we will proceed to build the app. We need to visualize phase wise.
      First Starting Breaking the UI intoComponents Hierarchy,
      Second build a static version
      Third minimal needs to represent the UI State
      Fourth Identify Where the state will stay
      Last Add inverse data flow





3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Ans:Stateful components are always class components.Stateful components have a state that gets initialized in the constructor.We can update the state using setState to make the application interactive.
    Presentational components are coupled with the view or how things look. These components accept props from their container counterpart and render them. Everything that has to do with describing the UI should go here. Presentational components are reusable and receives the data and callbacks exclusively via props and when an event occurs, like a button being pressed, it performs a callback to the container component via props to invoke an event handling method.

4.  Describe state.
Ans:Like props, state holds information about the component. However, the kind of information and how it is handled is different.
    By default, a component has no state.When a component needs to keep track of information between renderings the component then needs state.So we create state in  th comonent through class and updateor change its status by setState.


5.  Describe props.
AnsProps stands for properties. Props are passed into the component.When we give a component some ‘attribute-looking’ data on our JSX, React builds out an object that we can consume as a parameter inside of a Functional Component.
    Props are immutable (or Read only) meaning we cannot change props  We simple receive them in our components and use them to display data to the user. How do we interface with our users, and Props are that data that we pass around that our users will interact with.



