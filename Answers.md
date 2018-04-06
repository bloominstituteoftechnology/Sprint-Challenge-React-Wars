# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    It is a tool used to make reusable components that break down tasks into small portions to be handled in smaller portions. It differs because the usage is more based on the size of the project. If it is being used for a large scale project it is highly affective since reusable components make tasks a lot easier. However for a smaller scale it really isnt crucial so it isnt the only option. For example the strong equivalant would be angular that is VERY useful for SPAs since code production is quick and, has easy testing, and 2 way data binding

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    There is initialization caused by Render and ComponentDidMount. This is where components are initialized and props/states are executed(invoked). If needed, data is fetched by ComponentDidMount and used to initialize our props/state.
    Then is the state changes (updated). This is for whenever this.setState is used to update/alter the current state.
    Finally is unmounting. This gets called before the components are removed from the Dom so that any storage or cleanups can be run

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    The differences are that a functional component is just a JS Function (ie const func = () => {}) that gets an optional argument called props while a Class components on the other hand has a class structure with contructor/super that can accept the props but can also maintain as state (although not necessary). Presentational components are reusable and used for how things look and affect the UI. So, a Stateful Class component will deal with the logics and data of a program while the Functional/Presentational component will only deal with the UI of the program and will only recieve data and execute callbacks to the container.