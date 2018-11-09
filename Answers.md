# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a JavaScript library for creating scalable user interfaces. One of its key selling points is the virtual DOM, which allows fast loading and updating of components on a webpage. Because of its component-based structure, code written in react tends to be very reusable.

1.  What does it mean to _think_ in react?

When one "thinks in react," they break down the problem they are given in a way that fits with react's methodology. If I were asked to solve a problem using react, I would first look at the UI I am given and break it down into components. I would then think about any changing data (or state) that would need to be displayed, and I would start to add state to the components, keeping in mind the idea of "lifting state up."

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The key difference between a Classical and Functional component is that classical components come with a handy thing called state. With a classical component, it is possible to add data and methods to it in order to aid in its function. Functional components are purely presentational, and their sole purpose is to display data that is passed into them.

1.  Describe state.

State in ReactJS refers to an object that contains all the dynamic information a component uses. For example, if you have a form in react, you will likely want to have some state that contains the input data for the form. The input data would be a good idea for state because it is something that the component will need to keep track of, and form inputs change dynamically.

1.  Describe props.

Props are data that is passed down into components. They differ from state in that they are controlled by a higher order component, as opposed to the component itself. An example of a prop would be a label for an h1 or an array of objects to be displayed in a lower component.
