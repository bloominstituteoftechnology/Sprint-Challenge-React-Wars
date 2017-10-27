Questions

  1 -  What is React JS? How does it differ from 
       other JavaScript Frameworks?
	
	JSX-based components rendered and updated via 
     state management.

  2 - Explain briefly the React Component Lifecycle. 
	 Name three of the methods that are a part of 
      the lifecycle and what they do.
	
	render()
		- Greenlights the ReactDOM virtual DOM to allow 
            the browser to draw the components onto the 
            actual DOM layout.
			NOTE: An internal react check is done first 
                     with componentDidMount().
		- Typically returns a JSX element/component.
	
	setState()
		- Sets the state of the DOM component which 
            stores it's place in ReactDOM lifecycle.
		- Has a callback function param for futher 
            instruction execution upon completion.
	
	forceUpdate()
		- Skips over shouldComponentUpdate() to 
            componentWillUpdate().
		- Discouraged unless you can't update properly. 
	
  3 - Briefly describe some of the differences between 
      a Class/Stateful component and a Functional/
      Presentational component.
		
	- Stateless: has no state object and must be passed 
       directly to the render function.
		- Simply returns props.
		- More difficult to clone since you have to write 
            your own code to manage the props or copy them 
            into a Stateful component.
		- The ideal component for optimization.

	- Stateful: has a state object to store and reference 
       past, current, and future changes.

    Name the three arguments that are passed into the
    React.createElement() function?

	- type,
		- element type, usually a JSX component.
	- [props],
		- properties array, usually enclosed in curly braces {}.
	- [...children]
		- children array passed as to the created JSX component. 
			- Stores them under this.props.children.