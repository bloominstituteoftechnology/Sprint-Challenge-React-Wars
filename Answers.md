# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
React is one of a handful of frameworks that integrate html in its code but it is popular as it is updated often.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The React component lifecycle follows the beginning construction of a component and it's ending execution afterwards. Their built in methods allow finer control as to when they execute. componentWillMount ensures that data has been loaded before the first render call. componentDidMount calls setState to change the components state afte the first call.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Both types of components can execute static data that does not need to change. However a functional component only executes once and it's lifecycle does not allow any component methods to be used. The class component holds on to the state of data as it can change and uses methods to do so.

4. Briefly describe PropTypes and what we use them for when building react applications.
ProtoTypes are useful tools that call different checks on the types of data a component receives. These methods from ProtoType can send warning as to what type of data is currently present from the props of another component that passed data.