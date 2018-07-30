# Answers

1.  What is React JS and what problems does it try and solve?
    # ReactJS is a library created by Facebook that allows you to pass around properties and state to components that can be used over and over again.  The problem that ReactJS solves is it allows you to create a component one time and use it wherever it's needed, decreasing workload.
1.  What does it mean to _think_ in react?
    # When "thinking in React" you have to seperate things into components, and then once you have identified the components, break them down into sections that make up that component.  Then you have to pass properties between each part of the component or to other components, this is how React components communicate.
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    # A Class / Stateful component has state, it has a render function, and it has a constructor function / houses react lifecycle methods.  A functional component / presentation component is just that, it just displays it's content and passes props it cannot have state or lifecycle methods.
1.  Describe state.
    # State is what drives React and makes it *React*ive... <insert dun dunsch sound here>.  The state object can be passed to other components via properties and each class stateful component can have it's own state.  State is something that is unique to React, it is very powerful and can even be persisted through sessions.
1.  Describe props.
    # Properties can be passed around through all components in React stateful or functional.  State can be passed as props as well.  Properties are passed by making a attribute in the html tag of the component that is contained in the parent.  For instance, list={this.state.list}, we would be passing the value of the key list into the component as a prop.  In the child component it can be accessed via {this.props.list}.