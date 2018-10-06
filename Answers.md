# Answers

1.  What is React JS and what problems does it try and solve?: ReactJS is a JavaScript library, it allows you to write declarative, component-based code. You can build simple components, then reuse them in other applications. React makes it painless to create interactive UIs. React also makes it easy to test applications since it is component based.

1.  What does it mean to _think_ in react? To think in React means that we should break our app into components and give them a single thing to accomplish versus multiple things.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. A class component can have state while a functional component can't have state.

1.  Describe state. Unlike props, state is a private feature and belongs to a single component. State allows React to dynamically change output over time in response to certain events.

// example code 

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    render() {
        return{
            <p>{this.state.counter}</p>
        }
    }
}
1.  Describe props.: Props is a way to pass data from the parent to the child and customize the component when it's being created to give it different parameters.

// example code

class Example extends Component {
    render{
        return(
            <div>
            <p> Example code for props</p>
            <Example name='Props' />
            <Example name='State' />
            </div>
        )
    }
}
