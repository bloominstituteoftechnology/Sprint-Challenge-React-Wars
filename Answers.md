# Answers

1.  What is React JS and what problems does it try and solve?

A: React is a JavaScript, front-end library that creates a virtual DOM which reflects changes to the DOM as they are made. If you have a very active/large application, using the regular DOM would render changes very slowly. React helps solve that problem by making those changes very quickly without the DOM getting bogged down. React is very unopinionated in that it doesn't really care how you structure your front-end development.

2.  What does it mean to _think_ in react?

A: Thinking in React is how you approach your build. Instead of thinking of structuring in an HTML format, we break down our approach to 'components'(i.e. re-usable, independent blocks of code with their own structure, but work together to build your application).

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A. Functional components are basically just JavaScript functions that accept some input(prop), whereas Class components have more features, but the biggest difference is that Class components can have 'state'.

4.  Describe state.

A: 'State' is basically owned by the component in which it is declared. The component can update the state whenever necessary. It's scope is limited to the component where it is declared. Once state is passed out of the component it becomes 'prop'.


5.  Describe props.

A: A 'prop' is akin to a function input. So when a component accepts input(i.e 'prop') it renders the code.
