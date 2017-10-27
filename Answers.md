1* React is a JavaScript library for building user interfaces. React is mostly the view of your page. All it outputs is html. Bundles of html and javascript code are called components. Framework is a more general multi-tool thing than a library, which is usually very specialized. In our case React has really clever solution, the virtual document object model. Which rerenders only what changes on the page rather than entire DOM.

2* Each component in React has life cycle methods that execute in a certain order. It all starts with a constructor where you can set initial state and default props. Then goes first true life cycle method that is called componentWillMount. 
This method is only called one time, which is before the initial render and you start performing calculations on the prop values or update our state. After that goes render method, it renders our content to the page and it must be a pure method that means we can't call setState() within it. Calling setState starts an infinite loop that watches for changes to that component state. componentDidMount is executed after the first render. This is where AJAX requests should occur.

3* Functional/Presentational component means it's stateless. Whose main purpose is to display information and it also can have props that were passed from his parent. Alternatively, Class/Stateful has all life cycle methods available to use.

4* There are three arguments that are passed into the React.createElement() : element, props(attributes), children.
var link = React.createElement('a', {href: '#'}, React.createElement('div'), null))