1. What is React JS? How does it differ from other JavaScript Frameworks?

    React is a JavaScript Framework that is designed specifically for building dynamic user interfaces. It utilizes individual components to render specific elements only when those elements are specifically called to be rendered. This provides for a relatively lightweight display of a created user interface. 
    The component design allows blocks of code to be used efficiently in multiply places on your page.
    One very unique feature of React is the instant rendering of changes; and the ability to change display without reloading the page; the data request and retrieval is done behind the scenes and then rendered in real time for the user.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

    Since React render functions are pure and do not have an ability to store data we need a way or method of retrieving and updating data based on user interaction or events.
    componentDidMount() is used to mount a data state to a component for rendering; this method pulls data from the targeted source and stores it for manipulation and rendering.
    componentWillUnmount() is used to dismount current data state; removing current data and any active listeners.
    componentWillReceiveProps() is used when you want to update the currently active component with new data rather than creating a new component and dismounting/remounting the new component.

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    A Class component utilizes state to render different information based on that status of "state"; a Functional componenent is a pure component that consists of only a render method. The function retains the same form and what it renders is only altered by the props it recieves.

4. Name the three arguments that are passed into the `React.createElement()` function?

    Type: The type of the element to be created.
    Props: Properties to be passed into the element, styles
    Children: The information to be rendered.