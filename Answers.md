# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a JavaScript library that, in a lightweight manner, deals with breaking website pieces into components (hopefully reusable). It is designed to help a website keep track of data, especially extensive or scaling data, and make the UI more responsive to that data.

2.  What does it mean to _think_ in react?

It means to think about what could and should be components on a website, look for opportunities to be DRY and re-use components and other code, and think about the state of the website and what data should flow where.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful components are in charge of keeping track of data, altering that data when necessary, and passing it around to where it is needed. They do not usually deal with rendering DOM elements, although they may contain presentational components inside them.

Presentational components deal with what gets displayed to the user through the virtual DOM and actual DOM. They do not hold state themselves, although they may have pieces of it passed to them as props and may contain stateful components inside them.

4.  Describe state.

State is the collection of information that a website (or a piece of that website) is keeping track of. It has been described as the "heart" of the site, the central area through which data (the site's "blood") must go in order to circulate.

5.  Describe props.

Props is the generic name we give to objects that are passed down to components for those components to put to use, holding pieces of state (or other, more temporary data) to guide those components' behavior.