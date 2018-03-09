# Answers

## 1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a framework for building web applications that can dynamically update their content without disrupting the user experience, the end result is that they feel more like desktop applications using web technologies. One way it differs from other frameworks is its use of a Virtual DOM, allowing it to very cheaply create elements on the fly (which end up just being plain objects) that are then translated to real HTML elements later. This ends up becoming part of the React Component Lifecycle, a feature that differentiates it from other frameworks which do not re-render components on state changes.

## 2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle is the term for the various stages between the creation and destruction of a component. A few of these methods are:

### 1. componentDidMount

This is how we check that the component actually exists so that we can interact with it, like set its state.

### 2. componentWillReceiveProps

This method allows us to compare the incoming props with the data we currently have so that we can make decisions on how things should change.

### 3. render

The render method is where you are describing what will visually appear on the screen.

## 3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The main differences are that functional components are smaller, and do not need to store data to work on within the component itself.

## 4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes allows us to validate the data coming in as props to ensure that it is what our component is expecting. If we wanted an Object full of strings, we can test to see if the data is valid and throw up an error if it is not.
