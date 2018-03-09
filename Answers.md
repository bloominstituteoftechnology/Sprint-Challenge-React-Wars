# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

ReactJS is a JavaScript framework/library that is used to create User Interfaces using components which are reusable.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle allows us to pass around data using props and state.  There are life cycle methods such as ShouldComponentUpdate(), ComponentWillUpdate(), and ComponentDidUpdate().  ShouldComponentUpdate() essentially tells React if the output of a component  is or isn't affected by a change in props or state.  ComponentWillUpdate() on the other hand is called before render() when a component recieves new props or state.  ComponentWillUpdate() won't be called if ShouldComponentUpdate() returns false.  ComponentDidUpdate() is called after an change/update in props/state on a component. If a component didn't update no network requests should be called, but if a component did you might need to update data with one.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component allows us to use state in the React Component.  We call constructor(), super(), and below those we can invoke state with this.state = {};  We import the React Component and use it by extending our class.

A Function/Presentational component however, cannot use state only props.  We cannot mutate any data using this type of function/component.  We can however import other components that use state and display them in this particular component.
