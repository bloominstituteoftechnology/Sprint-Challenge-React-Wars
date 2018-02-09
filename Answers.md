# Question 1

## What is ReactJS? How does it differ from other JavaScript Frameworks?

React is a library for creating user interfaces with abstracted components.  I know little about other framkeworks but I think React is unique with its Virtual DOM and server side rendering.

# Question 2

## Explain briefly the React Component Lifecycle. Name three of the methods that area a part of the lifecycle and what they do.

React components are first mounted (created and inserted into the vitual DOM and rendered) then if any changes are made it gets updated (re-rendered) then if its no longer needed it gets unmounted (removed from the DOM).

``` javascript
componentWillMount();
```

This method runs right before a component is mounted.

``` javascript
componentWillUpdate();
```

This method runs right before a component updates.

``` javascript
componentWillUnmount();
```

This method runs right before a component unmounts.

# Question 3

# Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component can store state and have its own methods, while a functional component exists mostly just to abstract a block of reusable code.