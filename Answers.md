# Answers

1.  What is React JS and what problems does it try and solve?
React JS a user interface component library, and NOT a framework. It is a collection of javascript functions (essentially) that allows a designer and/or engineer to build out a user interface for a webapp extremely effectively.

As most of us are aware, Facebook is rediculously interactive, and while that is a huge plus for us users, such functionality would normally put tremendous strain on the webpage's DOM, which would have to handle all those requests and updates. 

Enter the VirtualDOM, which was designed by FB engineers to deal with that DOM bog issue. The problem of how to render complex state and still keep the page responsive and reactive was the major problem that needed to be tackled by the React project, and by all measures, it has succeeded in alliviating it.

2.  What does it mean to _think_ in react?
To "think" in react is to simply think a little differently about building out a webpage. First, break down the UI into a component hierarchy, with the app component being the top layer, and all the individual components having data flowing to them from above. Then, build out the basic structure of the static site. Next, truely think in a "DRY" way and identify the most minimal representation of the UI state. Don't repeat a Todo list array 10 times in your various components; store just one in your state and pass that along downwards to your components.

Finally, have that state "live", or propogate from somewhere. This is also where you probably will make a class constructor with a render function, and where you will do your react magic. Pass that state with props downwards so that you can control your data from just one main component (the app file for me).

Finally, you need to build out the "inverse data flow", which basically means that you make it so your main component can import the other components and their functionality. From there, on your main app, you can use the SetState method to update the UI, rerender the screen, and VOILA! You got yourself in the react mindframe!

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The simplest explanation is a Class/Stateful component can have much more functionality than a Functional/Presentational component, with the render() method, state method, and SetState being the most important.

A class component (at least as far as we have gone) typically is your main, highest level component, which imports all the other components and uses the various state methods to update the UI on the webpage. The functional components, on the other hand, are usually built out of functions, not classes, and simply are the interactive components of the page, that then send whatever data is inputed or given to them back up the hierarchy to the main component with the class functions.

4.  Describe state.
State, defined simply, is the data that the webapp needs to use to render the UI on the webpage, and is what we need to offload from the DOM to the VirtualDOM. State is the DATA that our components will need access to in the app.


5.  Describe props.

Continuing the explanation from above, we have our State (data) that our components need to have access to to do... anything. So how do we pass that along? We use props! Props stands for properties, and this is essentially the data that we pass to our functional components so that they can be consumed inside them as parameters. 

Tricky thing: props are read-only, or immutable, meaning we can not mutate them. The idea is that the components only display the data given to them via the props keyword, and that the user will then interact with that data that we passed to them from the class component.
