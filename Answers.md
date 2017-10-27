1. WHAT IS REACT JS? HOW DOES IT DIFFER FROM OTHER JAVASCRIPT FRAMEWORKS?
React JS is a JavaScript library for creating user interfaces. It allows you to build dynamic components that integrate HTML and JavaScript, rendering and re-rendering based on user interaction/input.

2. EXPLAIN BRIEFLY THE REACT COMPONENT LIFECYCLE. NAME THREE OF THE METHODS THAT ARE A PART OF THE LIFECYCLE AND WHAT THEY DO.
A component is called by the ReactDOM.
It receives default props (getDefaultProps()) and may perform actions just prior to mounting (componentWillMount()).
It returns/renders a chunk of HTML (render()).
It may perform some code immediately upon mounting (componentDidMount()).
It may be re-rendered through changes to props or state (componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(), render(), and componentDidUpdate()).
It unmounts when removed from the virtual DOM (componentWillUnmount()).

3. BRIEFLY DESCRIBE SOME OF THE DIFFERENCES BETWEEN A CLASS/STATEFUL COMPONENT AND A FUNCTIONAL/PRESENTATIONAL COMPONENT.
A Class component has a state, while a functional component does not. Both can accept props. A class component typically contains additional methods, some of which are standard to React.

4. NAME THE THREE ARGUMENTS THAT ARE PASSED INTO THE REACT.CREATEELEMENT() FUNCTION.
React.createElement(type, [props], [...children])
type = either a tag name (like 'div' or 'span') or a React Component type (class or function)
props = the props being passed to be manipulated in rendering the element
children = the element's child-level tags/content