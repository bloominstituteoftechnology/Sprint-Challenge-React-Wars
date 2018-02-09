1. React is a declarative and flexible JavaScript library for building user interfaces. It focuses primarily on rendering and changing different components on the fly as the user interacts with the page.

2. Each component has lifecycle methods that you can override to run code at particular times in the process. componentDidMount() can be called when a component is being created and inserted into the DOM. componentWillUpdate can be called when a component is being rerendered. componentWillUnmount() is called when a component is being removed from the DOM.

3. Functional components lack the ability to maintain their own state, and they get none of React's lifecycle methods. However they require less code to write and are easier to manage in a UI application.