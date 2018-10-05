# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a JS library for creating reusable UI components. It allows you to not affect the actual DOM but rather the virtual DOM. This way you can have a lot of components on one page and have them update without refreshing the page and have better performance.

2.  What does it mean to _think_ in react?

To think in React is to think of everything on the page/app as components/boxes and each of those components possibly having children and grandchildren and so on. Thinking of it as a hierarchy.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Some differences between a Stateful component and a Presentational component is that Stateful component is concerned about how things work and provide the data and behavior to other components. While Presentational components have no dependencies, are concerned with how things look, and recieve the data and callbacks via props from other components. Mainly the Class component. Using both is a great approach because you benefit from better re-usability and better organization when it comes to your app.

4.  Describe state.

State can be considered as the 'heart' of the application. State contains the data that our components reference and pass around to other components. Whenever state updates, so will our components.

5.  Describe props.

Props can be described as the blood that's being pumped from state. Functional components receive props as arguments. They are immutable.
