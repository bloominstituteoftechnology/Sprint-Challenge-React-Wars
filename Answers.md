# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a wrapper created by the facebook development team to try and make the behavior of handling components with JS much more fluid for creating front-end websites.

2.  What does it mean to _think_ in react?
    It means to think about how you can build UI components into a hierarchy. It allows design implementation to make building large scaling websites by seperating state and the display of data.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    class components hold the constructor (which holds the state), many methods, and a render() method that gets called everytime this.setState() gets called. This render() method calls and passes in
    props(class methods(), and state properties) to the "functional components" for displaying information from the state and calling js methods... using the js component from react to turn it into a webrowser.

4.  Describe state.
    The state holds all the current data for components to display. Everytime setState is called, you must reset everything in state. This is because state is considered an immutable object,
    and must be fully copied (with the needed changes) before replacing the original state.

5.  Describe props.
    props is the generic used variable passed between components main functions/classes as an object of properties.