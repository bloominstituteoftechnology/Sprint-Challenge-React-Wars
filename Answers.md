# Answers

1.  What is React JS and what problems does it try and solve?

1. React is a library written for Javascript. It is a user interface component library. It was created by Facebook. It is NOT a framework. All it cares about is rendering data to the screen. 
It tries to solve problems that occur in asynchronus environments. It uses state to achieve this. I will explain state in one of the next questions. :)


1.  What does it mean to _think_ in react?

2. To think in react is the way you approach a react project. Step1 would be to create a mock from the original data that is given to you. Then draw boxes around every thing that
will be a component. This is how you divide the UI into a component hierarchy. The next step is to build a static version in react. Just use props for now and do the state later. 
Next is look at which data is mutable and figure out what needs to be the trigger to change the underlying data. Now figure out where your state should live. The whole idea is to build
modular components that are reusable. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

3. Functional components use props to move data around. Props values cannot be changed. In order to make changes to the data we have to 
use Class components. These use STATE to make changes to the data. 

1.  Describe state.

4. State is a way to get to the current data that a component is using. It refers to muteable data. Changes to the state cause the app to rerender and thus update the screen. 
It's also seems to be a current state of being. as in my girlfriend is not muteable but i wish she was. Current state is used to grab data right as it is changed. React can then
redraw the screen. It only redraws the part of the data that has changed. This really save resources and allows the app to operate much more efficiently.  

1.  Describe props.

5. Props is short for properties. Props are key value pairs that you use to pass data along from a parent to a child. They are a mechanism used to pass information. Props are immutable.

