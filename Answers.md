# Answers

1.  What is React JS and what problems does it try and solve?

React is a library for composing view components. It is used to create front-end applications, and becomes especially useful for this as the data grows and the logic increases in complexity. Without such a design system, complex, modern web apps would become very difficult to maintain, to update, to develop, and to keep performant. By putting the focus on creating reusable, composable components that are organized into a tree, React systematizes the development process, which makes developers more efficient and facilitates the creation of more complex (and useful!) applications. 

2.  What does it mean to _think_ in react?

At it's core, React is a component tree with one-way data flow (inverse data flow being achieved through the use of passed callbacks). This understanding informs the steps to creating an idiomatic React application. Once there is a mock (a solid understanding of what needs to be build), we can follow these steps: 

First, break the mock up into sections (with some sections simply being used to contain and organize other sections). These will be called components.

Second, build a static version. We do this before adding state to divide the development process into discrete chunks and avoid getting lost in the complexity of the implementation.

Third, determine the minimal representation of state. Some things should be state, and others should not, and this is where we determine that. State is where we put our dynamic, mutable data. It does not include static content, props, or any derivative representation of itself (such as might be used in a component, say for example to display a sorted version of an array held in state).

Fourth, determine where state should live. At a minimum, state should live in the most recent common ancestor (so to speak), of all descendant components that need access to it. In practice, this often means placing all state in a central store located at the root, such as is the case with Redux.

Fifth, pull everything together by introducing inverse data flow (via callbacks passed from parents to children). This allows all the components to communicate, and allows us to implement all the logic we want. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component can create its own state, define methods to pass to children, and invoke lifecycle hooks. A functional component simply receives and transforms data (often by adding view functionality and styling). 

4.  Describe state.

State is dynamic, mutable data held by our app, typically for the purpose of rendering specific, custom views. To the extent that different versions of the same app can differ at runtime, this divergence is due to differing state.

5.  Describe props.

Props are data passed from one component to the next. They can be derived from state but do not need to be. While there are circumstances where we might want to modify props, such as by sorting a list in our view component, we should not do so in a way that violates our need for a single source of truth. Which is to say, we should only modify props in way that is consistent and predictable. Any other logic should be held in state and passed as props. 
