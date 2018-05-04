# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

    React JS is a JavaScript library for building UI components, which allows applications to be composed and scale efficiently by separating out specific parts of the DOM into smaller pieces.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    The Component Lifecycle begins with Mounting, undergoes changes through various Updating functions, and ends with Unmounting.

        1. `componentDidMount()` is a React method that allows data to be loaded into a rendered component. It also allows for adding event listeners. It's great for AJAX calls to load in data.

        2. `componentWillReceiveProps()` is a React method that uses `nextProps` as a parameter to pass properties from a parent component and decide if the same properties will update on the child component. Good for updating state transitions depending on the property.

        3. `componentDidUpdate()` is a React method that is triggered after the virtual DOM is updated on a component. It is useful for updating the DOM based on property or state changes.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

        A Class/Stateful component stores information on itself under a State Object, which is comprised of key value pairs. It uses constructor and super methods to create this State. A Functional/Presentational component does not use state nor the methods, but rather props as a variable in order to render DOM elements. These components do not store information in the State Object, and therefore only inherent information from its parent component.


4. Briefly describe PropTypes and what we use them for when building react applications.

        PropTypes is an additional React node package that allows for the checking of type of properties in a component. PropTypes is useful for components that import data and store that data on its State Object, in order to avoid type coercion or other mistakes from extracting incorrect data.