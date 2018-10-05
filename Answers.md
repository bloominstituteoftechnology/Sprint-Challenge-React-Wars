# Answers

1.  What is React JS and what problems does it try and solve?
    ReactJS is a JS library that seeks to solve some problems we have currently when manipulating the DOM. With apps like Facebook/Quora that have items such as comments that require re-rendering of the DOM each time, ReactJS instead does a diff between the virtual DOM and the DOM and renders specific items that change that really helps with performance. Writing the React way uses components so code is reusable and follows the principles of DRY. ReactJS is unopinionated so you can write it the way that you want. Other than that, it’s moderately easy to learn and a very popular library.

2.  What does it mean to _think_ in react?
    To 'think' in react means to think of breaking the app into components that you can create and deploy together in unison.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational     component.
    Class/Stateful components have state, or mutable data, that can be used. Additionally, they are usually the containers for Functional/Presentational components. Functional/Presentational components are simply displaying the data provided to them without manipulating the data at all.

4.  Describe state.
    State is mutable data that can be changed with setState and passed down as props as well.

5.  Describe props.
    Props are attributes given to child components from parent components that used as data/functions in the child component.