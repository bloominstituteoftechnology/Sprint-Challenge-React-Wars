# Answers

1.  What is React JS and what problems does it try and solve? <br>
    React is a UI component library written in Javascript (and JSX). It was created by Facebook to handle complex state. It is scalable and reusable as everything is component-based. It does not care about _how_ you manage your data. All it cares about is rendering that data via the Virtual DOM. Use of the Virtual DOM means that React solves the problem of how computationally expensive it is to update the real DOM.<br><br>

2.  What does it mean to _think_ in react? <br>
    Because React is component-based, the first step to thinking in React is to think about how to decompose a UI into constituent components. In simple terms, each component should be responsible for doing just one thing well. When you build apps, you should first lay out the components statically (i.e. without State). Once you've gotten those working, you must figure out (a) what the minimal State is (i.e. anything that can't be independently derived) and (b) where to have State live in your app (which Component it should sit on). Finally, you can pull state down through your app via state to props and you can update state via event handlers. <br><br>

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. <br>
    Stateful components have State and are written using Class syntax. They are concerned with how things work, so they provide data from state to other components via props.<br> Presentational components should not have State. They are concerned with how things look. They make accept data from Stateful components via props in order to inform presentation. They are written using functional syntax.<br><br>

4.  Describe state. <br>
    State is created within a component as an Object in which to store data. It can be changed by the component it's in. State can be passed down to other components via props. <br><br>

5.  Describe props. <br>
    Props is short for "properties." Props are not created within a component, they are passed in. As such they should remain pure and never change. The only way to legitimately change props are to update state and then pass the updated value(s) into the target component as props.
 