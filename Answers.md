# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    ReqctJS is a javascript library that helps to break your webpage down into components. By doing this you are easily able to scale and duplicate multiple items on the page. ReactJS also utilizes a virtual DOM to mimic the actual DOM. This allows you to render components without actually making changes to the actual DOM.
1. What does it mean to think in react?
    Thinking in react means thinking about how you can break your webpage up into different components
1. Describe state.
    State is the data of the webpage. The react app only renders when there is a change in state 
1. Describe props.
    Props allows you to pass state from one component to the next
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    Side effects are functions that affecs something outside of its closure. In react you utilize useEffect to control side effects and attach dependencies to them to allow to sync to changes in prop/state