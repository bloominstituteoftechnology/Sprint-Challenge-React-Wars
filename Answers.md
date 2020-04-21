# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React is a JS framework. React makes it so our page only has to re-render when there is some change in state, rather than re-rendering everything, such as with DOM manipulation. For example when we use an onClick in React, only the component targetted by the event is re-rendered.

2. Describe component state.

    - state stores data in our react components, allowing them to be dynamic

3. Describe props.

    - props is what we use to pass data down our react components tree. It is read-only and therefore cannot be edited.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    - a side  effect affects something that is not in our function scope. In our useEffect, we can set the data on our page to react in some way when whatever is in its dependency array changes.
