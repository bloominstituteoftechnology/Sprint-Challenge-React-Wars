# Answers

1.  What is React JS and what problems does it try and solve?
+ React is a JS framework. The problem it solves is the cost of DOM manipulation. DOM manipulation can be
  technologically expensive. But by having a "Virtual DOM" feature React is able to abstract away parts of that 
  complexity and cost. Because of the React architecture we are able to update only granular aspects of the web app that need to be updated. The result is speed and a much lower "cost" on the actual DOM.

1.  What does it mean to _think_ in react?

+ React is completely modular. These modules are reflected in the way that we organize our files and route our data in a React application. While funcitonally very similar to using a traditional html file, styled with a separate css file and activiated by a seperate js file....React brings all of these together. Thus we have to shift the way that we think about composing the app. While React provides ample opportunity to completely DRY apps, the blending of all the sub components of the app is something that a programmer must get used to.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
+ Class/stateful components handle data as it moves through the React application. These components are responsible for defnining and organizing the data. Functional/ presentational components then take that more clearly defined/ potentially better organized data and "run it through" functions and commands that dictate presentation such that now the data is actually being made useful for the app user.

1.  Describe state.
+ State defines the an aspect of computer memory. Basically the last saved configuration of the data is state. A program is considered stateful if it exhibits the ability to be able to save configurations as they change.

1.  Describe props.
+ Props are properties. They are just pieces of data that are being entered into an application. These props are then passed around using components. If components are the pipes, props are the water in those pipes.
