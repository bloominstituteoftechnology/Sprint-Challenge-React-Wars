# Answers

1.  What is React JS and what problems does it try and solve?

React is a nonopinionated Javascript library.  I think it tries to solve two problems: one has to do with devlopment, the other with deployment.

From a development point of view React wants to help developers overcome some intrinsic problems with working on the front end.  Control is unwieldy and the concerns
for your layout and the behavior of your layout (e.g. your application) are separated in a shallow way.  React wants to put control in a single sensible location
and put layout and behavior next to eachother so the developer can more easily conceptualize their design.

<<The Following was added after pencils down!  I completely forgot I wanted to make a second point here, which is arguably the more important of the two.  Wewps.>>

From a DEPLOYMENT point of view React provides highly scalable applications.  By building out a blueprint as to how my application is going to alter the DOM before
actually altering it then altering it all at once (rather than piecemeal) React achieves a high degree of computational efficiency.

1.  What does it mean to _think_ in react?

Splitting your concept for a web application into pieces called 'components' and deciding how data will flow through those components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A stateful component will be our application's brain and the various presentational components will be our application's body parts.  More below.

1.  Describe state.

A repository for most, if not all, of the data our application needs.

1.  Describe props.

Data or methods passed from the stateful component to it's presentational components.