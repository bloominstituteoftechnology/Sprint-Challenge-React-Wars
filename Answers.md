# Answers

1.  What is React JS and what problems does it try and solve?

React is a User Interface Javascript Component Library for building user interfaces, where a component is a stand-alone element that has style, structure and functionality.  It is declarative in nature.  ' "Declarative" is style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.' source:  https://en.wikipedia.org/wiki/Declarative_programming.  React was originally built by the Facebook team in order to address complexity and volume of data on the site.  React allows rendering of a massive user interface while breaking free of the constraints caused by the complex state and the large amounts of data that are needed to fully populate the site.  React is extremely flexible when it comes to extracting data, in that it can take data in multiple formats.  Working in a React environment requires two packages.  

The first is used to access the API and the other is used to target the elements in the DOM.  It also depends on the use of another language called JSX which is JavaScript but with more crossover with html.  JSX improves scalability.  In order to write html syntax in a script, it is necessary to  add an additional tool called babel.

At the fundamental level, React makes use of the createElement() method in the form:

React.createElement('h1', {className: 'heading'}, 'Hello World!')

The first entry is a string representation of the DOM element you want to represent, the second is an attribution to be applied to said element, and the final argument is a nested child of the specified element.  



2.  What does it mean to _think_ in react?

My sense is that "thinking in react" means viewing user interfaces as collections of components that interact with the user in various ways.  It also means creating the content and (perhaps less so) the styles of a website using javascript.  In the past, we built static websites and then maybe added some interactive elements.  Thinking in react means viewing the website as dynamic right from the start. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional and class compoenents have similarities in that they are both functional pieces of the user interface.  Class components are more powerful because they can be built with properties and methods and are used to render some state data to the DOM.  Class components also can use state and props to share data with other components. 

4.  Describe state.

"State" refers to the method by which we can set up a data object to be associated with a class component.  It was described in our lesson as the heart of the application, which makes sense because "state" is the vehicle responsible for moving data throughout the application, in the way the heart moves blood around the body. 

5.  Describe props.

State is the heart of an application and props are the blood.  Props are pieces of information on our class components that move around our application. Props can be things like a person's name, job, date of birth.  In the React ecosystem, the props can be taken in from user input and then passed to different places in the application. 
