# Answers

1.  What is React JS and what problems does it try and solve?

     React is a Javascript library that is used for building user interfaces. It is component based and automatically refreshes the browser whenever any data is changed. It allows individual components to be manipulated without affecting any other items on the page and allows the component to be used as many times as necessary. Anytime data is added, React only updates the specific component that have been targeted. This solves the problem of having the browser reload the entire application when the only changes necessary were to individual components. This prevents a very expensive process from happening within the DOM. 

2.  What does it mean to _think_ in react?

    To think in react means to chop a project into smaller components and then build it up from a static state. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational       component.

    A class component is capable of holding state while functional components cannot. A Functional component is only capable of containing "props" and rendering them to the page.

4.  Describe state.

    State is used for mutable data that is only capable of being created in "Class" components, however, it can be passed to other components within the application. State cannot be accessed from outside component and can only be modified from within the component. 

5.  Describe props.
     
    "Props" or "properties" are data that is passed from parent components to child components. They are used in functional components and allow the components to communicate with eachother via data. Props allow the developer to create reusable components. 