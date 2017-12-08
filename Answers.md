1. React is a JavaScript library that manages only the view part of the model-view-controller structure, where a framework like Angular implements the whole shebang
2.
componentDidMount() - called after a component is inserted into the DOM
shouldComponentUpdate () - called whenever props/state are changed
render() - called when content needs to be displayed (post-mounting) and re-displayed (after a state change)
3. A class component is a JS class that extends component and stores data relevant to the component in foo.state (thus, state-ful). Class components are re-rendered upon a change to their state object by calling foo.render().
A functional component is a JS function that returns HTML. Unlike class components, functional components don't have data stored in their state and lack lifecycle methods.
4. type = HTML tag name or React component name
props = the properties (passed as this.props)
...children = any child nodes