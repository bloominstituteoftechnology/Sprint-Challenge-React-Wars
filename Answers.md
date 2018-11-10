# Answers

1.  What is React JS and what problems does it try and solve?

    React is not a framework, it is a user interface component library with a single, simple job: rendering UI. It was built by Facebook to handle the data-driven world we currently live as well as make coding easier and faster. It helps out with carrying the weight of constant changes in data so the DOM is not so bogged down.

2.  What does it mean to _think_ in react?

    I believe this is referring to breaking an app down into a component hierarchy then determining the parent components in which the minimal data to get the job done is stored and passed down to its children presentational components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Well, the biggest one is given in the names.

    So far in all the JS, I've learned, a class is a parental unit. In React, it does the heavy lifting of holding the data, manipulating the data, and sending that data to its children Functional/Presentational components.

    A Functional/Presentational component is used to simply render the data that is passed down to it from the Class Component. It is functional because it only has one job as with most functions. It does not hold as much responsibility as the Class. No state to worry about and it is a pure function so it is not allowed to manipulate or mutate the data sent to it.

4.  Describe state.

    To me, it's almost like a storage of all the data used in an app. It is responsible for holding all the props needed in the app and maintaining the value of those props at all times as well as passing down that value into lower components as needed.

5.  Describe props.

    Props are pieces of data passed from component to component in a React App. They are stored in the Apps state and their value is rendered all through the app by being passed down to lower components as necessary. Their value is read-only to other components and simply rendered in the component. Only the parent Class component can manipulate the data by using .setState
