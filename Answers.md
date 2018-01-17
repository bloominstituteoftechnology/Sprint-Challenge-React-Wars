## Answers
1. What is React JS? How does it differ from other JavaScript Frameworks?

*React JS is a library built from JavaScript that also utilizes HTML to render HTML components. It differs from other JavaScript Frameworks by completely managing the DOM via the Virtual DOM, as well as working with Components instead of Models/views/controllers.*

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

*The first part of the lifecycle is mounting, followed by updating, and finishing with unmounting. Mounting involves creating React components and inserting them into the DOM. Updating involves re-rendering components when updates or changes are made to props and/or states. And unmounting involves removing components from the DOM.*

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

*A `Class` component involves changing the `state` of elements in the component (by using `JavaScript` ES6 `Class` syntax. A `Functional` component only renders components via `functions`.*

4. Name the three arguments that are passed into the `React.createElement()` function?

*The three arguments passed into `React.createElement()` are 
- HTML type (e.g. `div`, `h1`)
- HTML class, called `className` in React (e.g. `App`, `App__header`)
- HTML things to render, the data between e.g. `<div></div>`
.*