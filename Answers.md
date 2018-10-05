# Answers

1.  What is React JS and what problems does it try and solve?
React is an unopinionated user interface library (as opposed to a framework) that was created by Facebook to meet the ever increasing demands of dynamic interfaces. React is referred to as being unopinionated because it allows developers to work with JS how they want to, use other JS libraries, and can even be used along side other frameworks of the developers choosing. The flexibility of being unopinionated in combination with React's innovation of a "Virtual DOM", which considerably speeds up processing time is what makes it able to keep up with the needs of a dynamic web-environment.

1.  What does it mean to _think_ in react?
Thinking in react is a component based approach to designing application architecture. It begins with breaking the UI into a component hierarchy. Deciding what each component should be and where it should be in principal is decided based on its visual hierarchy. This approach works well because the visual hierarchy often reflects the informational hierarchy and will work with the downward flow of data in react. Visual design often also uses styles to represent different functions of the page (sidebar information, navigation, main content, opt-in forms) to make it easy for users to scan the page and get the information or behavior they need. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A stateful component is the dynamic aspect/s of the application, because the values of properties in a class/stateful component can be manipulated and mutated. This is in contrast to the functional component whose property (props) values cannot be manipulated. More specifically, props should be immutable and be passed down the component hierarchy, meaning a parent component can pass on whatever data it wants to its children as props, but the child component cannot modify its props. Often developers use stateful components to deal with behavior and functional components to deal with presentation of behavior. 

1.  Describe state.
State is a dynamic object whose job is to to hold the data that represents the state of app. State is managed within the component it is initialized in, similar to variables declared within a function, which allows it to hold state between renderings. Conceptually, it works much like closure in standard JS. In a typical react design, you would have all of your dynamic data living in one state component to be accessed by it's children as props. 

1.  Describe props.
Props can be thought of much like function parameters, or as HTML attribute tags. They hold immutable data that can be used in a method to accomplish it's goal in the application. Props are passed into functional components, often from a stateful parent component. 
