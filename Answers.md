# Answers

1.  What is React JS and what problems does it try and solve?
React is a library for building user interfaces. It is based on components,
in an effort to keep you as DRY as possible by building reusable blocks of
code you can reuse anywhere. It is meant to help with problems of scaling,
as well as inefficient rendering of the DOM.

1.  What does it mean to _think_ in react?
It means to plan your app dividing into the single-responsibility blocks of code,
and then organizing their hierarchy and the data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
In essence, Presentational components are static and will stay as declared (although
they may reference data that changes, the reference itself will not change.) They
will receive a prop (declared by the coder) and return React elements.
Stateful components can be thought of as the current data in the application. They
can changed through handler functions, making the app dynamic.

1.  Describe state.
State is an object in the constrcuction function holding different key-value
pairs. The advantage is that while the app is live, the key-value pairs can be
accessed and updated. The info held in state flows down to the rest of the app.

1.  Describe props.
Props are the inputs declared by the coder that serve as, well, property values
of the component receiving them. Declared when declaring the component, props
allow components to maintain a skeleton/base-function and yet render different
versions. They are like arguments to a function. 
