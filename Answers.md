* React is a JavaScript library that allows developers to create large web-applications that use data and can change over time without reloading the page.

* The react component lifecycle relates to how a component goes through three different stages: mounting, updating, and unmounting. When an application is started, necessary components are mounted or "inserted" into the DOM. Once the user starts to interact with the application, some components update. Components that are not being/should not be interacted with are unmounted. Lifecycle methods are invoked at various phases of the lifecycle of a component. Tapping in to a component's lifecycle allows developers to control which components gets re-rendered and when they are able to do so.
* componentWillUpdate - is called right before React will re-render a component class instance into the DOM.
* shouldComponentUpdate - this method decides whether or not a component instance needs to be re-rendered. True by default.
* componentDidUpdate - is called right after React has re-rendered a component class instance into the DOM.

* Stateful components execute state changes, can get information from stateless components, and contain information concerning the current state. Presentational components receives it's information via props and when an event occurs, it performs a callback. It is usually concerned with the UI/how things look and should not be affected by things like API calls.
