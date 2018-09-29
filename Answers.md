# Answers

1.  What is React JS and what problems does it try and solve?

    > *React is a javascript library that is used to build user interfaces. It makes it easier to create fast, dynamic applications. It does this by using what is called the virtual DOM. Whenever a change or update is needed in the application, the virtual DOM is changed. Then,  only those changes made in the virtual DOM is made in the actual DOM, rather than having to update the entire DOM.  This makes react fast.*

1.  What does it mean to _think_ in react?

    > *To think in react means to separate your code into blocks called components.  A component can be thought of as being either different parts of the user interface or different parts of the application logic.  For instance I could have a section/component called TodoList that handles the output of lists to the UI. I could also have a component called AddTodo whose pupose is to add to the data of the application and not concerned with the UI. Thinking in the react or component way makes building larger apps easier and more scaleable as it makes our code more modular. Each component can build upon another.*


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    > A Class component:

        1. Must contain a render() function
        2. Must extend Component object within the class definition
        3. Can contain state
        4. Must be used if you want to use the life-cycle methods


    > A Functional component:

        1. Does not contain state
        2. If using props, props or deconstructed varibale name for props must be contained in function argument
        3. Primarily used for presenting to User Interface

1.  Describe state.

    > *State is where the primary data of the application is stored.  It is the heart of the application.  It is an object that is mutable.  This ability to change the state makes the application dynamic.  The state is used to indicate the status of particular parts of the application. State is changed by using the setState() method.*

1.  Describe props.

    > *props is an object that is passed from one component to another.  It is how data and state is passed down from a parent component to a child component.  It is passed via the 'parameter' list when a component is called.*

    > *Ex: `<ChildComponent name={this.state.name}  />`  - result in passing the name value to a child component via the props object.  props={name}*
