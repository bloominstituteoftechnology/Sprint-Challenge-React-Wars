1. What is React JS? How does it differ from other JavaScript Frameworks?

    React is a library to help you create user interfaces. React main focus is on the view part of the MVC architecture and how the UI connect to those other parts. React also abstracts away DOM manipulation and creates a virtual DOM, that 'reacts' to state or data changes in your app. 

    The some of the differences between React and other frameworks are. React is Components based istead of Models, views and controllers. Your app is really a main component with abuch of sub-components kind of like nesting HTML tags. Also React has a one-way data flow meaning your main app component manages the entire state or data for you app and passes down that data to sub-components as props.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    The Component Lifecyle is all the things that happen between before your component exists to when it disappers or unmounts. React gives us methods to control some of what happens in that time frame. For instance, `componentWillMount()` is called before you component is about to mount. `componentDidMount()` is called have the components has mounted this a perfect time to call API requests that may take some time to get data from. 'componentWillUnmount()` is called right before the component go away this a good place to clean up any loose ends in your component like evenlisteners or outgoing api requests.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A stateful component can hold some sort of data or state in it that you can use in you component and has to be written with ES6 class keyword. Stateless components do not need to store any data to be used and is mostly used for presentational components like a header or footer. Stateless components are typically written in a functional way but you could use ES6 syntax.

4. Name the three arguments that are passed into the React.createElement() function?

The 3 arguments that can be passed to React.createElement() are type, props, and children. Type is the HTML tag your creating, props is the data your passing to that element and children is the node that the HTML element will be placed in.