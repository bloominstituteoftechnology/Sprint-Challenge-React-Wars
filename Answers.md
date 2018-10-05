# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a JavaScript library for building quick single page applications. React is considered unopinionated as it does not come stocked with features you may not use like some larger frameworks. Instead you import them in as needed. React is based around building reusable code in components that can be placed where ever you need them without having to rewrite the entire code. React specializes in single page applications rather than building multiple pages as it's virtual dom will only re-render to the dom changes as they are made rather than reloading the entire page to check for state changes.

1.  What does it mean to _think_ in react?
Thinking in react means to look at your design and see what can be broken into individual reusable componenets before working. If you are going to reuse a code for something, why write it 20 times when you can simply write it once.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Presentational components handle just the layout of the web app. They handle what is rendered and not much else. Class/stateful components will usually handle the data or state and methods that are invoked when changes to that state are made.

1.  Describe state.
State is the condition that a value is currently at. If it is set to false, a method could set a new state (not mutate) to true causing a change to the state.

1.  Describe props.
Props are simple properties that can be defined later in the class components. We use this to tie/bind our properties to the current state and change it if needed within the class component.