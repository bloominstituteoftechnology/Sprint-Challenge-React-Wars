1. React JS is an open-source JavaScript library. It allows developers to create large     web applications. The diffence with React JS is that it uses a virtual DOM. It          completely manages the DOM for you. 

2. The React component lifestyle are different methods used to override the code at particular times in the process to insert, use, and then remove from within the DOM.

Constructor - is called before it is mounted.
constructor(props) {
  super(props);
  this.state = {
  };
}

componentDidMount() - is invoked immediately after a component is mounted. 

componentWillUnmount() - This method is called when a component is being removed from the DOM

3. 
Class/Stateful component - it is a central point that stores information in memory about the app/component's state.

Functional/Presentational component - it calculates its internal state but it never directly changes it.

4. component, props, children
