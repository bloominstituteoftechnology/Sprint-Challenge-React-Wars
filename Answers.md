1. ReactJS is an open-source library that was created by a team at Facebook. It is usedf or building interfaces specifically for single page applications. It is used for handling the view layer of the MVC model. It allows the creation of reusable UI components. Rather than reload the whole page, it uses a virtual DOM to keep track of differences and renders parts of the page when it recognizes a change. It uses a langauge called JSX to write html code in the javascript, and then under the hood transpiles that data to html. 

React is different in that it takes care of maganging the DOM for you. It deos this by utilzing something called the virtual DOM. You do everything by working with "components" instead of Models, views, and controllers. 

2. The React lifecycle in order is 

willMoutn --> didMount --> willRecieveProps --> shouldUpdate --> willUpdate --> render --> didUpdate --> willUnmount

componentDidMount - is whent he componenet has loaded and the method where you would want to load your data. One example would be makign an API call where you are gather information from some other interface. THis is to ensure that everything is loaded and ready before you start setting the state. 

componentWillReceiveProps - This is where parent component may have props to pass down after mounting. Here we have access to both the next props and our current props. We can check if the props are going to change and then decide what to do wtih those changes. 

render - this is when react will take the code and all the states and put whatever we have in the render method and display it to the page. It does this in the bacground by transpiling the JSX code into html. 

3. The main differnet between a class componenent and a function componoent in React is the ability to change state. A functional component can be used when we we just need to render html and won't have any changes being done. A class or or stateful component is to be used when there will be any time of change to the componenent. That might be updating a list, or changing an input. In either case props can be passed down to the child components. 

4. The 3 arguements passed in are type, which can bea string with represents the HTML element, or a React component, props, which can be null or an object containing attributes and values, and children, which can be null, a string that gets turned into a text node, an instance of React.createClass() or a React.createElement();
