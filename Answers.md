# Answers

1.  What is React JS and what problems does it try and solve?
        React is a user interface component library. A library that does one thing really well which is render UI.
        It offloads the a large portion of data that apps use form the DOM. It does this with a concept called virtual DOM.
        Information gets sent to the virtual DOM with components and is able to check what the DOM represents, and when data changes, it is able know what the DOM looks like, and then changes it to what it should look like because of the change in data.
1.  What does it mean to _think_ in react?
        Thinking in react is thinking about how you build an app like breaking the ui into components and identifying where your state should be.
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
        The constuctor function receives props as an argument. 
1.  Describe state.
        State is essentially the data and also determines how the componenet renders and behaves.
1.  Describe props.
        Props stands for properties and when we give a component attribute like data in jsx we tell react to build out an object that can be consumde as a parameter inside a functional component.