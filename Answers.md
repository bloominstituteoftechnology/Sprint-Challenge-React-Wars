1. What is React JS? How does it differ from other JavaScript Frameworks?

  React JS is a JavaScript library designed specifically for building user interfaces with a combination of HTML, CSS, and JS (a combo called JSX);
  The main differences are:
    ..* it focuses on rendering only data that has changed
    ..* it uses a virtual DOM

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

  The React Component Lifecycle consists basically of Mounting, Updating, and Unmounting. Three methods involved are:
    ..* render() - a required method that examines this.props and this.state, ultimately returning something that the developer want to put on the screen
    ..* setState() - a method in charge of enqueing changes by telling React that this component needs to be re-rendered because it has received new information to display
    ..* componentDidMount() - a method invoked when a component is mounted; it is mostly used for initialization


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  ..* a functional component is basically just a JavaScript function, but it takes an optional input called props
  ..* a class component can refer to itself with the 'this' keyword, while a functional component (usually made with arrow functions) cannot
  ..* a class component has more features, most notably 'state', which allows it to render changed data with setState()
  ..* a functional component (usually) just needs to return something, but a class component is required to call its render() method
  ..* generally, functional components are for the view/presentaion of the react project, and class components act as the containers of those functional components