# Answers

1. What is React JS? What types of problems does it solve?

React is basing on splitting app parts into resuable Components.

React JS ia front-end framework. It is not a typical MVC one tho, more like View only. React creates a Virtual DOM, that holds a copy of DOM and only updates parts that changed. Thanks to React managing DOM is more effective and less costly, as operating on DOM elements (especially on large applications like Facebook) is very 'costly' and heavy loads the entire application.

Thanks to React we can also hold data in a State, one place and then distribute it to children components. Thanks to this we can update data across whole application with update to single value. It is very effective in applications with multiple events happening every milisecond (many users, comments, posts, like twitter or facebook).

2. Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do.

React Component life-cycle is as names implies, life and death of a Component. It determines when built in methods 'kick in'. Methods like ComponentDidMount are called after something happens, like data gets loaded into state and for example ComponentWillMount is called before something happens. Another such component is ComponentWillUnmount, that will do something and then will be gone forever.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

Stateful component uses ES6 syntax currently and acts like a class. It is used when we have some kind of state or data to manipulate and pass down the chain. Stateful component always requires to call render() and extend React.Component.

Stateless components are for presentational purposes only and will render/return what is given to them along with props. They do not have access to state or any life-cicle methods but they can use props to display data.

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes are ways for developer to validate type of data that component receives. It is used for testing purposes because we can't trust ourselves and we are prone to errors. PropTypes are removed in Production Environment.