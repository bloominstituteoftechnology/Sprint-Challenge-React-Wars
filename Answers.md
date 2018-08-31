# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a UI Component Library. React JS is mainly used to manage loads of data (rendering UI) without slowing down a user's browser. The main issue React aims to solve is browser loading time, which is solved by introducing scalable, reusable code through the use of components.

2.  What does it mean to _think_ in react?
To "think" in React means to think of building your application in component pieces. Often times, applications that have multiple features have many patterns and similarities which can be solved by making one component for each unique feature that is repeated multiple times. Thus when thinking in react, you would be thinking of a way to make a structure of components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
The main difference between a Class Component and a Stateful component is: a Class component can have state optionally, and has the freedom to be stateless, but a Stateful component must have a state.

The main difference between a functional and presentational component is: a functional component concerns itself with how items work on the page, and provide information/data to the child components (presentational components), also they are often stateful. Meanwhile a presentational component is concerned with how the items on the page look, oftentimes they are stateless.

4.  Describe state.
State can be described as a way a component will behave based on its properties. State allows us to create dynamic and interactive components that can change based on small values that change. I like to think of state like the way the state of matter works for water. If the temperature is really low, water has its state changed to ice, and if its extremely hot, water can turn into gas. The only property that changes is the temperature, and if the temperature changes in a certain way the STATE of the water will change, making water "dynamic".
5.  Describe props.
Props, short for properties are pieces of data for a parent component to use. When components are made, they are like "fashionistas", components can be customized how ever they like, and thats what props do. The properties of a component give way to customization, for example: if a component had different images that should be shown at different points in the page, the props would require you to only make one component that is customized dynamically to display a different image.
