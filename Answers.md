# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    - React is a Javascript framework developed by Facebook. It differs from other frameworks as it has a
    - focus on building user interfaces, and makes use of JSX in order to smoothly combine the coding of HTML and
    - Javascript elements.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    - The lifecycle is the flow in which your app runs and updates through the rendering of individual components
    - that control individual aspects of the UI. 
    - Three methods are:
        - constructor(): This method is the first piece called in a component. It sets up the initial state
        - that the rest of the component will update as the app runs.

        - setState(): Used to update the component's states that were defined in the constructor.

        -  render(): Used to run the outcome of your components and construct them on the App.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    - Functional components are basically just normal JS functions. They are stateless, and take in  props from another component and perform a defined function when called.
    - Class components have state and interact with the App's lifecycle. They interact with their state and pass it as props to a functional component, and can render components and elements for the App.
