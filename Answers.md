# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?  React differs from other JS frameworks as it utilizes a virtual DOM, which is updates and pulls information from, thereby preventing the primary DOM from being constantly taxed with unnecessary updates and expensive data rendering.


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.  ::  It is akin to any lifecycle.  It begins with initial states and then dies off when nothing else needs to be rendered. It takes a look at what needs to be loaded with componentWillMount, nothing is really happening, except React accessing the default configurations behind the scene.  componentDidMount grabs that default data and manipulates it with setState and adds in new data as well (if applied).  And towards the end of the lifecycle we have the componentWillUpdate, which checks to see what it might need to change/update before the app re-renders.  It's never officially used because you cannot setState on it.  


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.  :: A Class component can have it's state set on 'this', which will usually be updated later on.  A functional component is used when state is not going to be changed, all the values will remain the same and not be re-rendered or manipulated within that component.
