# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
  React JS is a JS library.  React works with this idea of the virtual DOM where UI is updated on the client's side instead of through a server.  This lends React to being highly responsive and quick which is why it's being used with Facebook and Instagram where information is updating and changing quickly. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    React is made up of components and the Component Life-cycle is a process where the UI is updated.
  `Constructor` - is called when we create a new object.  We also must use super when we use class extends.  It basically calls the parent and starts to initialize.
  `Render` - is all UI related and signifies what is being rendered.
  `ComponentDidMount` - basically declares that a component and all children components has rendered.  Also, this is where data can be retrieved from.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

 `Class/Stateful component` are used when we have state information that we want to manage, like an array of users.
  `Functional/Presentational component` are functions that are solely responsible for UI, like a button or navbar element.